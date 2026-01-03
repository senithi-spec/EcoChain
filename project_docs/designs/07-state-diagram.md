# State Diagrams

**Project:** EcoChain  
**Diagram Type:** State  
**Version:** 1.0

---

## 1. Item Lifecycle State Machine

```mermaid
stateDiagram-v2
    [*] --> Available : Item Created

    Available --> Reserved : Receiver Claims Item
    Available --> Expired : Expiry Date Passed

    Reserved --> Completed : Pickup Confirmed
    Reserved --> Available : Claim Cancelled

    Completed --> [*]
    Expired --> [*]

    note right of Available
        Item visible on dashboard
        Can be claimed by receivers
    end note

    note right of Reserved
        Item removed from dashboard
        Linked to specific receiver
    end note

    note right of Completed
        Food rescue successful
        Item archived
    end note
```

### State Descriptions

| State         | Description                                 | Transitions                                 |
| ------------- | ------------------------------------------- | ------------------------------------------- |
| **Available** | Item is posted and visible to all receivers | → Reserved (claimed), → Expired (time)      |
| **Reserved**  | Item claimed by a receiver, pending pickup  | → Completed (confirm), → Available (cancel) |
| **Completed** | Food successfully rescued                   | Terminal state                              |
| **Expired**   | Item passed expiry date unclaimed           | Terminal state                              |

---

## 2. User Session State Machine

```mermaid
stateDiagram-v2
    [*] --> Anonymous : Page Load

    Anonymous --> Authenticating : Submit Credentials

    Authenticating --> Authenticated : Valid Token
    Authenticating --> Anonymous : Invalid Credentials

    Authenticated --> Anonymous : Logout / Token Expired
    Authenticated --> Authenticating : Token Refresh

    note right of Anonymous
        Access: Home, Login, Register
        No API access
    end note

    note right of Authenticated
        Access: All protected routes
        JWT stored in localStorage
    end note
```

### State Descriptions

| State              | Description                   | Available Actions          |
| ------------------ | ----------------------------- | -------------------------- |
| **Anonymous**      | User not logged in            | View home, Login, Register |
| **Authenticating** | Credentials being verified    | Wait for response          |
| **Authenticated**  | User logged in with valid JWT | All app features           |

---

## 3. WebSocket Connection State Machine

```mermaid
stateDiagram-v2
    [*] --> Disconnected : Initial

    Disconnected --> Connecting : Initiate Connection

    Connecting --> Connected : Connection Success
    Connecting --> Disconnected : Connection Failed
    Connecting --> Disconnected : Timeout

    Connected --> Disconnected : Server Disconnect
    Connected --> Reconnecting : Network Error

    Reconnecting --> Connected : Reconnect Success
    Reconnecting --> Disconnected : Max Retries Exceeded

    note right of Connected
        Receiving real-time events
        item:new, item:claimed
    end note

    note right of Reconnecting
        Auto-retry with backoff
        Max 5 attempts
    end note
```

### State Descriptions

| State            | Description               | Next Actions      |
| ---------------- | ------------------------- | ----------------- |
| **Disconnected** | No WebSocket connection   | Attempt connect   |
| **Connecting**   | Handshake in progress     | Wait for result   |
| **Connected**    | Active real-time channel  | Listen for events |
| **Reconnecting** | Lost connection, retrying | Auto-retry        |

---

## 4. Item Card UI State Machine

```mermaid
stateDiagram-v2
    [*] --> Idle : Component Mount

    Idle --> Loading : Click Claim

    Loading --> Success : API 200 OK
    Loading --> Error : API Error
    Loading --> Idle : Cancel/Timeout

    Success --> Removed : Animation Complete

    Error --> Idle : Dismiss Error
    Error --> Loading : Retry Claim

    Removed --> [*]

    note right of Idle
        Claim button enabled
        Card visible
    end note

    note right of Loading
        Button disabled
        Spinner shown
    end note

    note right of Success
        Toast notification
        Card fades out
    end note
```

### State Descriptions

| State       | Description                | UI Display                  |
| ----------- | -------------------------- | --------------------------- |
| **Idle**    | Card ready for interaction | Claim button active         |
| **Loading** | API request in progress    | Spinner, button disabled    |
| **Success** | Item claimed successfully  | Success toast               |
| **Error**   | Claim failed               | Error message, retry option |
| **Removed** | Card removed from DOM      | Not visible                 |

---

## 5. Authentication Flow State Machine

```mermaid
stateDiagram-v2
    [*] --> CheckingStorage : App Init

    CheckingStorage --> HasToken : Token Found
    CheckingStorage --> NoToken : No Token

    HasToken --> Validating : Verify Token

    Validating --> Authenticated : Token Valid
    Validating --> NoToken : Token Invalid/Expired

    NoToken --> LoginForm : User Navigates

    LoginForm --> Submitting : Submit Form

    Submitting --> Authenticated : Login Success
    Submitting --> LoginForm : Login Failed

    Authenticated --> NoToken : Logout

    note right of CheckingStorage
        Check localStorage
        for saved JWT
    end note

    note right of Validating
        Call GET /api/auth/me
        to verify token
    end note
```

---

## 6. Form Validation State Machine

```mermaid
stateDiagram-v2
    [*] --> Pristine : Form Initialized

    Pristine --> Dirty : User Input

    Dirty --> Valid : All Fields Valid
    Dirty --> Invalid : Validation Error

    Valid --> Dirty : Field Changed
    Invalid --> Dirty : Field Changed

    Valid --> Submitting : Submit

    Submitting --> Success : API Success
    Submitting --> ServerError : API Error

    Success --> [*]

    ServerError --> Dirty : Edit Form

    note right of Pristine
        No user input yet
        Submit disabled
    end note

    note right of Valid
        All validations pass
        Submit enabled
    end note

    note right of Invalid
        Error messages shown
        Submit disabled
    end note
```

---

## State Transition Tables

### Item Status Transitions

| Current State | Event      | Next State | Guard Conditions        |
| ------------- | ---------- | ---------- | ----------------------- |
| AVAILABLE     | claim()    | RESERVED   | User.role == RECEIVER   |
| AVAILABLE     | expire()   | EXPIRED    | now() > expiresAt       |
| RESERVED      | complete() | COMPLETED  | Valid receiver confirms |
| RESERVED      | cancel()   | AVAILABLE  | Within time limit       |

### User Session Transitions

| Current State  | Event          | Next State     | Actions               |
| -------------- | -------------- | -------------- | --------------------- |
| Anonymous      | login(creds)   | Authenticating | POST /api/auth/login  |
| Authenticating | success(token) | Authenticated  | Store token, redirect |
| Authenticating | failure(error) | Anonymous      | Show error            |
| Authenticated  | logout()       | Anonymous      | Clear token, redirect |

---

## Combined System State

```mermaid
stateDiagram-v2
    direction LR

    state "User Session" as US {
        [*] --> Anon
        Anon --> Auth
        Auth --> Anon
    }

    state "WebSocket" as WS {
        [*] --> Disc
        Disc --> Conn
        Conn --> Disc
    }

    state "Dashboard" as DB {
        [*] --> Empty
        Empty --> Items
        Items --> Empty
    }

    US --> WS : Authenticated
    WS --> DB : Connected
```

---

_State Diagrams - EcoChain Design Phase_
