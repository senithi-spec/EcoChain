# Sequence Diagrams

**Project:** EcoChain  
**Diagram Type:** Sequence  
**Version:** 2.0  
**Last Updated:** January 3, 2026

---

## 1. User Registration Sequence

```mermaid
sequenceDiagram
    autonumber
    participant U as User (Browser)
    participant F as Frontend (React)
    participant A as API (Express)
    participant P as Prisma ORM
    participant D as Database (SQLite)

    U->>F: Fill registration form
    F->>F: Client-side validation
    F->>A: POST /api/auth/register
    A->>A: Validate request body
    A->>P: findUnique(email)
    P->>D: SELECT * FROM User WHERE email=?
    D-->>P: null (not found)
    P-->>A: null
    A->>A: Hash password (bcrypt)
    A->>P: create(userData)
    P->>D: INSERT INTO User
    D-->>P: User record
    P-->>A: User object
    A->>A: Generate JWT (7d expiry)
    A-->>F: 201 {user, token}
    F->>F: Store token in localStorage
    F->>F: Show success toast
    F->>U: Redirect to dashboard
```

---

## 2. User Login Sequence

```mermaid
sequenceDiagram
    autonumber
    participant U as User (Browser)
    participant F as Frontend (React)
    participant A as API (Express)
    participant P as Prisma ORM
    participant D as Database (SQLite)

    U->>F: Enter email & password
    F->>A: POST /api/auth/login
    A->>P: findUnique(email)
    P->>D: SELECT * FROM User WHERE email=?
    D-->>P: User record
    P-->>A: User object
    A->>A: Compare password hash
    A->>A: Generate JWT (7d expiry)
    A-->>F: 200 {token, user}
    F->>F: Store token in localStorage
    F->>F: Update AuthContext
    F->>U: Redirect to dashboard
```

---

## 3. Post Food Item Sequence

```mermaid
sequenceDiagram
    autonumber
    participant U as Donor (Browser)
    participant F as Frontend (React)
    participant A as API (Express)
    participant M as Multer
    participant P as Prisma ORM
    participant D as Database
    participant S as Socket.io
    participant R as All Receivers

    U->>F: Fill item form + photo
    F->>A: POST /api/items (multipart)
    A->>A: Verify JWT (middleware)
    A->>M: Process file upload
    M->>M: Save to /uploads
    M-->>A: File path
    A->>A: Validate expiry date
    A->>P: create(itemData)
    P->>D: INSERT INTO Item
    D-->>P: Item record
    P-->>A: Item with donor info
    A->>S: emit('item:new', item)
    S->>R: Broadcast to all clients
    A-->>F: 201 {item}
    F->>F: Show success message
    F->>U: Clear form
    R->>R: Add item to dashboard
```

---

## 4. Claim Item Sequence

```mermaid
sequenceDiagram
    autonumber
    participant U as Receiver (Browser)
    participant F as Frontend (React)
    participant A as API (Express)
    participant P as Prisma ORM
    participant D as Database
    participant S as Socket.io
    participant All as All Clients

    U->>F: Click "Claim" button
    F->>F: Disable button (loading)
    F->>A: PATCH /api/items/:id/claim
    A->>A: Verify JWT (middleware)
    A->>A: Verify role is RECEIVER
    A->>P: findUnique(itemId)
    P->>D: SELECT * FROM Item WHERE id=?
    D-->>P: Item record
    P-->>A: Item object
    A->>A: Check status == AVAILABLE
    A->>P: update(id, {status, receiverId})
    P->>D: UPDATE Item SET status='RESERVED'
    D-->>P: Updated item
    P-->>A: Item with receiver info
    A->>S: emit('item:claimed', {itemId})
    S->>All: Broadcast to all clients
    A-->>F: 200 {item}
    F->>F: Show success toast
    All->>All: Remove item from dashboard
```

---

## 5. Real-Time Dashboard Sequence

```mermaid
sequenceDiagram
    autonumber
    participant U as User (Browser)
    participant F as Frontend (React)
    participant A as API (Express)
    participant S as Socket.io Server
    participant P as Prisma ORM
    participant D as Database

    U->>F: Navigate to /dashboard
    F->>A: GET /api/items
    A->>A: Verify JWT
    A->>P: findMany({status: AVAILABLE})
    P->>D: SELECT * FROM Item WHERE status='AVAILABLE'
    D-->>P: Item records
    P-->>A: Items array
    A-->>F: 200 [items]
    F->>F: Render item cards
    F->>S: Connect WebSocket
    S-->>F: Connection established

    Note over S,F: Real-time listening active

    loop On new item posted
        S->>F: emit('item:new', item)
        F->>F: Add item to state
        F->>U: New item appears
    end

    loop On item claimed
        S->>F: emit('item:claimed', {itemId})
        F->>F: Remove item from state
        F->>U: Item disappears
    end
```

---

## 6. JWT Authentication Middleware Sequence

```mermaid
sequenceDiagram
    autonumber
    participant F as Frontend
    participant M as AuthMiddleware
    participant A as API Controller
    participant P as Prisma
    participant D as Database

    F->>M: Request with Authorization header
    M->>M: Extract token from header
    alt No token provided
        M-->>F: 401 Unauthorized
    else Token exists
        M->>M: Verify JWT signature
        alt Invalid/Expired token
            M-->>F: 401 Unauthorized
        else Valid token
            M->>M: Decode userId from token
            M->>P: findUnique(userId)
            P->>D: SELECT * FROM User
            D-->>P: User record
            P-->>M: User object
            alt User not found
                M-->>F: 401 Unauthorized
            else User exists
                M->>M: Attach user to req.user
                M->>A: next()
                A->>A: Process request
                A-->>F: Response
            end
        end
    end
```

---

## 7. Session Restoration Sequence

```mermaid
sequenceDiagram
    autonumber
    participant U as User
    participant F as Frontend (React)
    participant L as LocalStorage
    participant A as API (Express)

    U->>F: Open application
    F->>L: Read token
    alt No token
        F->>F: Set user = null
        F->>U: Show login page
    else Token exists
        F->>A: GET /api/auth/me
        A->>A: Verify JWT
        alt Token valid
            A-->>F: 200 {user}
            F->>F: Set AuthContext user
            F->>U: Show dashboard
        else Token invalid/expired
            A-->>F: 401 Unauthorized
            F->>L: Clear token
            F->>F: Set user = null
            F->>U: Redirect to login
        end
    end
```

---

## 8. Cancel Claim Sequence

```mermaid
sequenceDiagram
    autonumber
    participant U as Receiver (Browser)
    participant F as Frontend (React)
    participant A as API (Express)
    participant P as Prisma ORM
    participant D as Database
    participant S as Socket.io
    participant All as All Clients

    U->>F: Click "Cancel Claim" button
    F->>F: Disable button (loading)
    F->>A: PATCH /api/items/:id/cancel
    A->>A: Verify JWT (middleware)
    A->>A: Verify role is RECEIVER
    A->>P: findUnique(itemId)
    P->>D: SELECT * FROM Item WHERE id=?
    D-->>P: Item record
    P-->>A: Item object
    A->>A: Check receiverId matches user
    A->>A: Check status == RESERVED
    A->>P: update(id, {status: AVAILABLE, receiverId: null})
    P->>D: UPDATE Item SET status='AVAILABLE', receiverId=null
    D-->>P: Updated item
    P-->>A: Item object
    A->>S: emit('item:cancelled', item)
    S->>All: Broadcast to all clients
    A-->>F: 200 {item}
    F->>F: Show success message
    All->>All: Add item back to dashboard
```

---

## 9. Complete Item (Mark as Collected) Sequence

```mermaid
sequenceDiagram
    autonumber
    participant U as User (Browser)
    participant F as Frontend (React)
    participant A as API (Express)
    participant P as Prisma ORM
    participant D as Database
    participant S as Socket.io
    participant All as All Clients

    U->>F: Click "Mark as Collected" button
    F->>F: Disable button (loading)
    F->>A: PATCH /api/items/:id/complete
    A->>A: Verify JWT (middleware)
    A->>P: findUnique(itemId)
    P->>D: SELECT * FROM Item WHERE id=?
    D-->>P: Item record
    P-->>A: Item object
    A->>A: Check user is donor OR receiver
    A->>A: Check status == RESERVED
    A->>P: update(id, {status: COMPLETED, collectedAt: now()})
    P->>D: UPDATE Item SET status='COMPLETED', collectedAt=?
    D-->>P: Updated item
    P-->>A: Item with updated status
    A->>S: emit('item:completed', {itemId})
    S->>All: Broadcast to all clients
    A-->>F: 200 {item}
    F->>F: Show success message
    F->>U: Update item status in UI
```

---

## Sequence Summary

| Diagram         | Primary Flow                      | Key Interactions              |
| --------------- | --------------------------------- | ----------------------------- |
| Registration    | User → Frontend → API → DB        | Password hashing, validation  |
| Login           | User → API → DB → JWT             | Token generation, storage     |
| Post Item       | Donor → API → DB → Socket         | File upload, broadcast        |
| Claim Item      | Receiver → API → DB → Socket      | Status update, broadcast      |
| Dashboard       | User → API → Socket               | Initial load + real-time      |
| Auth Middleware | Request → Middleware → Controller | Token verification            |
| Session Restore | App Load → Storage → API          | Token validation              |
| Cancel Claim    | Receiver → API → DB → Socket      | Release item, broadcast       |
| Complete Item   | User → API → DB → Socket          | Mark collected, set timestamp |

---

_Sequence Diagrams - EcoChain Design Phase_
