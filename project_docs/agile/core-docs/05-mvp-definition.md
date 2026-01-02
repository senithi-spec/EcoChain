# MVP (Minimum Viable Product) Definition

**Project:** EcoChain  
**Version:** 1.0  
**Created:** December 5, 2025  
**Sprint Alignment:** Sprints 1-3

---

## MVP Overview

The MVP delivers one complete "Food Rescue Cycle" that demonstrates the core value proposition:

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Register  │ ──► │  Post Item  │ ──► │ View Dashboard │ ──► │ Claim Item  │
│  (Donor/Rx) │     │  (Donor)    │     │  (Real-time)   │     │  (Receiver) │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
```

---

## MVP Features

### 1. User Authentication System

| Feature               | Description                                   | Priority |
| --------------------- | --------------------------------------------- | -------- |
| Donor Registration    | Register with email, business name, password  | **High** |
| Receiver Registration | Register with email, name, Org ID, password   | **High** |
| User Login            | Authenticate with email/password, receive JWT | **High** |
| Session Management    | Persist login state, protected routes         | **High** |

**Technical Implementation:**

- Backend: Express.js + JWT + bcrypt
- Frontend: React Context API for auth state
- Storage: localStorage for token persistence

---

### 2. Item Posting (Donor Flow)

| Feature        | Description                           | Priority   |
| -------------- | ------------------------------------- | ---------- |
| Post Item Form | Name, Quantity, Expiry Date fields    | **High**   |
| Photo Upload   | JPG/PNG image attachment (optional)   | **Medium** |
| Validation     | Future expiry date, positive quantity | **High**   |
| My Posts View  | Donor can see their posted items      | **Medium** |

**Technical Implementation:**

- Backend: Multer for file uploads, Prisma for DB
- Frontend: Form with file input, client-side validation
- Storage: Local `/uploads` folder for photos

---

### 3. Live Dashboard (Real-Time Feed)

| Feature              | Description                               | Priority |
| -------------------- | ----------------------------------------- | -------- |
| Available Items Feed | Display all AVAILABLE items               | **High** |
| Real-Time Updates    | New items appear without refresh          | **High** |
| Item Cards           | Show name, quantity, expiry, photo, donor | **High** |
| Claim Button         | Visible only to Receiver users            | **High** |

**Technical Implementation:**

- Backend: Socket.io for real-time events
- Frontend: Socket.io-client listener
- Events: `item:new`, `item:claimed`

---

### 4. Claim Functionality (Receiver Flow)

| Feature           | Description                                 | Priority   |
| ----------------- | ------------------------------------------- | ---------- |
| Claim Action      | One-click claim for receivers               | **High**   |
| Status Update     | Item changes from AVAILABLE to RESERVED     | **High**   |
| Real-Time Removal | Claimed item disappears from all dashboards | **High**   |
| My Claims View    | Receiver can see their claimed items        | **Medium** |

**Technical Implementation:**

- Backend: PATCH endpoint with role validation
- Frontend: Optimistic UI update + socket confirmation
- Database: Status enum update with receiver linking

---

## MVP Exclusions (Deferred to MRF)

The following features are intentionally **excluded** from MVP:

| Feature                          | Reason for Deferral                    |
| -------------------------------- | -------------------------------------- |
| Admin Dashboard                  | Not critical for core cycle            |
| QR Verification                  | Adds complexity, can be manual for MVP |
| Email Notifications              | Real-time socket is sufficient         |
| Advanced Search/Filters          | Basic feed is sufficient               |
| Dietary Tags                     | Enhancement, not core                  |
| Document Upload (BR Certificate) | Simplified for MVP                     |

---

## MVP Acceptance Criteria

### User Registration

- [ ] Donor can register with email, business name, password
- [ ] Receiver can register with email, name, Org ID, password
- [ ] Duplicate email shows appropriate error
- [ ] Password is securely hashed (bcrypt)
- [ ] Role is correctly assigned and persisted

### User Login

- [ ] Valid credentials return JWT token
- [ ] Invalid credentials show error message
- [ ] Token is stored in localStorage
- [ ] Protected routes redirect unauthenticated users

### Item Posting

- [ ] Donor can post item with name, quantity, expiry
- [ ] Photo upload is optional but functional
- [ ] Past expiry dates are rejected
- [ ] New item appears in database with AVAILABLE status
- [ ] Socket event broadcasts to all connected clients

### Live Dashboard

- [ ] Shows all available items on page load
- [ ] New items appear in real-time (no refresh needed)
- [ ] Items display: name, quantity, expiry, donor name, photo
- [ ] Claim button visible only to Receiver users

### Claim Functionality

- [ ] Receiver can claim available item
- [ ] Item status changes to RESERVED
- [ ] Receiver ID is linked to item
- [ ] Item disappears from all dashboards via socket
- [ ] Donor cannot see or click Claim button

---

## MVP Technical Stack

| Layer     | Technology      | Justification             |
| --------- | --------------- | ------------------------- |
| Frontend  | React 18 + Vite | Fast dev, component-based |
| Styling   | Tailwind CSS    | Rapid UI development      |
| Routing   | React Router v6 | SPA navigation            |
| State     | Context API     | Simple, no Redux needed   |
| Backend   | Express.js      | Lightweight, flexible     |
| Database  | SQLite + Prisma | Zero-config, file-based   |
| Real-time | Socket.io       | Bi-directional events     |
| Auth      | JWT + bcrypt    | Industry standard         |
| Uploads   | Multer          | Express middleware        |

---

## MVP Definition of Done

A feature is considered MVP-complete when:

1. ✅ Code is implemented and compiles without errors
2. ✅ Feature works in local development environment
3. ✅ Manual testing confirms acceptance criteria met
4. ✅ Code follows project conventions and is readable
5. ✅ Feature integrates with existing functionality
6. ✅ No critical bugs or blockers

---

## MVP Timeline

| Sprint               | Focus         | Deliverables                         |
| -------------------- | ------------- | ------------------------------------ |
| Sprint 1 (Dec 5-11)  | Foundation    | Project setup, Auth system, Database |
| Sprint 2 (Dec 12-18) | Core Features | Item posting, Dashboard, Real-time   |
| Sprint 3 (Dec 19-25) | Completion    | Claim flow, Integration, Bug fixes   |

---

_MVP defined by the EcoChain Product Owner in Sprint 0 Planning_
