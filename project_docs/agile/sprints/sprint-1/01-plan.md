# Sprint 1 Plan

**Project:** EcoChain  
**Sprint Number:** 1  
**Duration:** December 5 - December 11, 2025  
**Sprint Goal:** Establish project foundation and complete user authentication system

---

## Sprint Overview

> "Due to the coursework timeline and team size, we adapted Scrum to 1-week sprints to maintain rapid progress and continuous feedback."

### Sprint Goal

**Deliver a working authentication system where donors and receivers can register and log in, with proper session management and protected routes.**

### Team Capacity

| Team Member | Role     | Availability                 |
| ----------- | -------- | ---------------------------- |
| Full Team   | Dev Team | 100% (focused on coursework) |

---

## Sprint Backlog

### Selected User Stories

| ID     | Story                 | Priority | Points | Status  |
| ------ | --------------------- | -------- | ------ | ------- |
| US-001 | Donor Registration    | High     | 3      | ✅ Done |
| US-002 | Receiver Registration | High     | 3      | ✅ Done |
| US-003 | User Login            | High     | 2      | ✅ Done |
| US-004 | Persistent Session    | Medium   | 2      | ✅ Done |
| US-005 | Protected Routes      | High     | 2      | ✅ Done |

**Total Story Points:** 12

---

## Task Breakdown

### US-001: Donor Registration (3 points)

| Task                                 | Assignee | Estimate | Status  |
| ------------------------------------ | -------- | -------- | ------- |
| Create Prisma schema with User model | Dev      | 2h       | ✅ Done |
| Setup Express server with CORS       | Dev      | 1h       | ✅ Done |
| Create authController.register()     | Dev      | 2h       | ✅ Done |
| Create /api/auth/register route      | Dev      | 1h       | ✅ Done |
| Build Register.jsx page              | Dev      | 3h       | ✅ Done |
| Add form validation                  | Dev      | 1h       | ✅ Done |

### US-002: Receiver Registration (3 points)

| Task                             | Assignee | Estimate | Status  |
| -------------------------------- | -------- | -------- | ------- |
| Add orgId field to User model    | Dev      | 0.5h     | ✅ Done |
| Add role toggle to Register form | Dev      | 1h       | ✅ Done |
| Show Org ID field conditionally  | Dev      | 1h       | ✅ Done |
| Validate Org ID for receivers    | Dev      | 1h       | ✅ Done |

### US-003: User Login (2 points)

| Task                           | Assignee | Estimate | Status  |
| ------------------------------ | -------- | -------- | ------- |
| Create authController.login()  | Dev      | 2h       | ✅ Done |
| Create /api/auth/login route   | Dev      | 0.5h     | ✅ Done |
| Build Login.jsx page           | Dev      | 2h       | ✅ Done |
| Return JWT on successful login | Dev      | 1h       | ✅ Done |

### US-004: Persistent Session (2 points)

| Task                         | Assignee | Estimate | Status  |
| ---------------------------- | -------- | -------- | ------- |
| Create AuthContext.jsx       | Dev      | 2h       | ✅ Done |
| Store token in localStorage  | Dev      | 0.5h     | ✅ Done |
| Create /api/auth/me endpoint | Dev      | 1h       | ✅ Done |
| Validate token on app load   | Dev      | 1h       | ✅ Done |

### US-005: Protected Routes (2 points)

| Task                            | Assignee | Estimate | Status  |
| ------------------------------- | -------- | -------- | ------- |
| Create ProtectedRoute component | Dev      | 1h       | ✅ Done |
| Create authMiddleware.js        | Dev      | 1h       | ✅ Done |
| Wrap dashboard routes           | Dev      | 0.5h     | ✅ Done |
| Add role-based access setup     | Dev      | 1h       | ✅ Done |

---

## Sprint Burndown

| Day   | Remaining Points | Ideal |
| ----- | ---------------- | ----- |
| Day 1 | 12               | 12    |
| Day 2 | 10               | 10    |
| Day 3 | 8                | 8     |
| Day 4 | 6                | 6     |
| Day 5 | 4                | 4     |
| Day 6 | 2                | 2     |
| Day 7 | 0                | 0     |

**Sprint Velocity:** 12 story points

---

_Sprint 1 Plan - EcoChain Scrum Team_
