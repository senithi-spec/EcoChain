# Sprint 1 Backlog

**Sprint:** 1  
**Duration:** December 5-11, 2025  
**Sprint Goal:** Establish project foundation and complete user authentication system  
**Committed Points:** 12

---

## Selected Product Backlog Items

| PBI ID | Title                 | Priority | Points | Status  |
| ------ | --------------------- | -------- | ------ | ------- |
| US-001 | Donor Registration    | High     | 3      | ✅ Done |
| US-002 | Receiver Registration | High     | 3      | ✅ Done |
| US-003 | User Login            | High     | 2      | ✅ Done |
| US-004 | Persistent Session    | Medium   | 2      | ✅ Done |
| US-005 | Protected Routes      | High     | 2      | ✅ Done |

---

## Task Board

### US-001: Donor Registration (3 points)

| Task ID  | Task Description                        | Estimate | Assignee | Status  |
| -------- | --------------------------------------- | -------- | -------- | ------- |
| T-001-1  | Create project folder structure         | 1h       | Dev 1    | ✅ Done |
| T-001-2  | Initialize npm and install dependencies | 1h       | Dev 1    | ✅ Done |
| T-001-3  | Create Prisma schema with User model    | 2h       | Dev 1    | ✅ Done |
| T-001-4  | Run prisma db push                      | 0.5h     | Dev 1    | ✅ Done |
| T-001-5  | Implement authController.register()     | 2h       | Dev 1    | ✅ Done |
| T-001-6  | Add password hashing with bcrypt        | 1h       | Dev 1    | ✅ Done |
| T-001-7  | Create POST /api/auth/register route    | 0.5h     | Dev 1    | ✅ Done |
| T-001-8  | Build Register.jsx page structure       | 2h       | Dev 2    | ✅ Done |
| T-001-9  | Add form fields and styling             | 1h       | Dev 2    | ✅ Done |
| T-001-10 | Implement form validation               | 1h       | Dev 2    | ✅ Done |
| T-001-11 | Connect form to API                     | 1h       | Dev 2    | ✅ Done |

---

### US-002: Receiver Registration (3 points)

| Task ID | Task Description                         | Estimate | Assignee | Status  |
| ------- | ---------------------------------------- | -------- | -------- | ------- |
| T-002-1 | Add orgId field to User model            | 0.5h     | Dev 1    | ✅ Done |
| T-002-2 | Update register controller for orgId     | 0.5h     | Dev 1    | ✅ Done |
| T-002-3 | Add role toggle to Register form         | 1h       | Dev 2    | ✅ Done |
| T-002-4 | Show Org ID field when Receiver selected | 1h       | Dev 2    | ✅ Done |
| T-002-5 | Add Org ID validation for receivers      | 0.5h     | Dev 2    | ✅ Done |
| T-002-6 | Test both registration flows             | 0.5h     | Both     | ✅ Done |

---

### US-003: User Login (2 points)

| Task ID | Task Description                  | Estimate | Assignee | Status  |
| ------- | --------------------------------- | -------- | -------- | ------- |
| T-003-1 | Implement authController.login()  | 1.5h     | Dev 1    | ✅ Done |
| T-003-2 | Generate JWT on successful login  | 1h       | Dev 1    | ✅ Done |
| T-003-3 | Create POST /api/auth/login route | 0.5h     | Dev 1    | ✅ Done |
| T-003-4 | Build Login.jsx page              | 2h       | Dev 2    | ✅ Done |
| T-003-5 | Add form validation               | 0.5h     | Dev 2    | ✅ Done |
| T-003-6 | Store JWT in localStorage         | 0.5h     | Dev 2    | ✅ Done |
| T-003-7 | Redirect to dashboard on success  | 0.5h     | Dev 2    | ✅ Done |

---

### US-004: Persistent Session (2 points)

| Task ID | Task Description                 | Estimate | Assignee | Status  |
| ------- | -------------------------------- | -------- | -------- | ------- |
| T-004-1 | Create AuthContext.jsx           | 1.5h     | Dev 2    | ✅ Done |
| T-004-2 | Implement user state management  | 1h       | Dev 2    | ✅ Done |
| T-004-3 | Create GET /api/auth/me endpoint | 1h       | Dev 1    | ✅ Done |
| T-004-4 | Validate token on app load       | 1h       | Dev 2    | ✅ Done |
| T-004-5 | Handle token expiry              | 0.5h     | Dev 2    | ✅ Done |
| T-004-6 | Implement logout functionality   | 0.5h     | Dev 2    | ✅ Done |

---

### US-005: Protected Routes (2 points)

| Task ID | Task Description                   | Estimate | Assignee | Status  |
| ------- | ---------------------------------- | -------- | -------- | ------- |
| T-005-1 | Create ProtectedRoute component    | 1h       | Dev 2    | ✅ Done |
| T-005-2 | Create authMiddleware.js           | 1h       | Dev 1    | ✅ Done |
| T-005-3 | Verify JWT in middleware           | 0.5h     | Dev 1    | ✅ Done |
| T-005-4 | Wrap dashboard routes              | 0.5h     | Dev 2    | ✅ Done |
| T-005-5 | Redirect unauthenticated to login  | 0.5h     | Dev 2    | ✅ Done |
| T-005-6 | Setup role-based access foundation | 0.5h     | Dev 1    | ✅ Done |

---

## Burndown Data

| Day | Date   | Tasks Remaining | Story Points Remaining |
| --- | ------ | --------------- | ---------------------- |
| 0   | Dec 5  | 36              | 12                     |
| 1   | Dec 6  | 30              | 11                     |
| 2   | Dec 7  | 24              | 9                      |
| 3   | Dec 8  | 18              | 7                      |
| 4   | Dec 9  | 12              | 5                      |
| 5   | Dec 10 | 6               | 2                      |
| 6   | Dec 11 | 0               | 0                      |

---

## Sprint Summary

| Metric           | Value |
| ---------------- | ----- |
| Total Tasks      | 36    |
| Tasks Completed  | 36    |
| Points Delivered | 12/12 |
| Completion Rate  | 100%  |

---

_Sprint 1 Backlog - EcoChain Development Team_
