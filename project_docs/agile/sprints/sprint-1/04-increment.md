# Sprint 1 Increment

**Sprint:** 1  
**Delivered:** December 11, 2025  
**Theme:** User Authentication System

---

## Increment Description

The first increment establishes the foundation for all user interactions with EcoChain. Users can register as either a food Donor or Receiver, securely log in, and maintain their session across browser refreshes.

---

## Features Delivered

### 1. Donor Registration

- Registration form with email, business name, and password
- Password hashing with bcrypt (10 salt rounds)
- Role automatically set to "DONOR"
- Duplicate email prevention with user-friendly error

### 2. Receiver Registration

- Registration form with Org ID field
- Conditional UI shows Org ID only for receivers
- Role set to "RECEIVER" with Org ID stored

### 3. User Login

- Secure login with email/password
- JWT token generation (7-day expiry)
- Token stored in localStorage
- Redirect to dashboard on success

### 4. Session Persistence

- AuthContext manages global auth state
- Token validated on app load via /api/auth/me
- Automatic logout on token expiry

### 5. Protected Routes

- ProtectedRoute component wraps private pages
- Unauthenticated users redirected to login
- Auth middleware protects API endpoints

---

## Technical Components

| Type     | Files Created                                                        |
| -------- | -------------------------------------------------------------------- |
| Backend  | `authController.js`, `auth.js` (routes), `authMiddleware.js`         |
| Frontend | `Register.jsx`, `Login.jsx`, `AuthContext.jsx`, `ProtectedRoute.jsx` |
| Database | `User` model in `schema.prisma`                                      |

---

## API Endpoints

| Method | Endpoint           | Purpose                  |
| ------ | ------------------ | ------------------------ |
| POST   | /api/auth/register | Create new user          |
| POST   | /api/auth/login    | Authenticate user        |
| GET    | /api/auth/me       | Validate token, get user |

---

## Definition of Done Verification

| Criterion                     | Status |
| ----------------------------- | ------ |
| Code implemented and compiles | ✅     |
| Works in local environment    | ✅     |
| Manual testing complete       | ✅     |
| No critical bugs              | ✅     |
| PO accepted                   | ✅     |

---

## Demo Scenario

1. Navigate to `/register`
2. Fill form as Donor → Success
3. Try duplicate email → Error shown
4. Login with credentials → Dashboard shown
5. Refresh page → Still logged in
6. Logout → Redirected to home

---

## Increment Value

This increment provides the **authentication foundation** that all subsequent features will build upon. Without it, there would be no way to:

- Identify who is posting items
- Restrict claiming to receivers only
- Track user activity

---

_Sprint 1 Increment - EcoChain Scrum Team_
