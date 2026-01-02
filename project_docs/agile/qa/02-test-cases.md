# Test Scenarios & Test Cases

**Project:** EcoChain  
**Version:** 1.0  
**Created:** December 5, 2025  
**Last Updated:** January 2, 2026

---

## Test Case Format

Each test case includes:

- **ID:** Unique identifier (TC-XXX)
- **Scenario:** What is being tested
- **Preconditions:** Required state before test
- **Steps:** Detailed test steps
- **Expected Result:** What should happen
- **Actual Result:** What actually happened
- **Status:** Pass ✅ / Fail ❌

---

## Module 1: User Registration

### TC-001: Donor Registration - Happy Path

| Field        | Value                                              |
| ------------ | -------------------------------------------------- |
| **ID**       | TC-001                                             |
| **Scenario** | Donor can register successfully with valid details |
| **Priority** | High                                               |
| **Sprint**   | Sprint 1                                           |

**Preconditions:**

- Application is running
- User is not logged in
- Email is not already registered

**Test Steps:**

| Step | Action                                    | Expected Result                       |
| ---- | ----------------------------------------- | ------------------------------------- |
| 1    | Navigate to /register                     | Registration page loads               |
| 2    | Select "Donor" role                       | Donor option is selected              |
| 3    | Enter valid email: test.donor@example.com | Email field accepts input             |
| 4    | Enter name: "Test Bakery"                 | Name field accepts input              |
| 5    | Enter password: "password123"             | Password field accepts input (masked) |
| 6    | Click "Register" button                   | Form submits                          |
| 7    | Observe result                            | Success message, redirect to login    |

**Expected Result:** User is registered and redirected to login page  
**Actual Result:** ✅ As expected  
**Status:** ✅ Pass

---

### TC-002: Receiver Registration - Happy Path

| Field        | Value                                      |
| ------------ | ------------------------------------------ |
| **ID**       | TC-002                                     |
| **Scenario** | Receiver can register with Organization ID |
| **Priority** | High                                       |
| **Sprint**   | Sprint 1                                   |

**Preconditions:**

- Application is running
- User is not logged in

**Test Steps:**

| Step | Action                                | Expected Result              |
| ---- | ------------------------------------- | ---------------------------- |
| 1    | Navigate to /register                 | Registration page loads      |
| 2    | Select "Receiver" role                | Org ID field appears         |
| 3    | Enter email: test.charity@example.com | Email field accepts input    |
| 4    | Enter name: "Test Food Bank"          | Name field accepts input     |
| 5    | Enter Org ID: "ORG-12345"             | Org ID field accepts input   |
| 6    | Enter password: "password123"         | Password field accepts input |
| 7    | Click "Register" button               | Form submits                 |

**Expected Result:** Receiver registered with Org ID stored  
**Actual Result:** ✅ As expected  
**Status:** ✅ Pass

---

### TC-003: Registration - Duplicate Email

| Field        | Value                                   |
| ------------ | --------------------------------------- |
| **ID**       | TC-003                                  |
| **Scenario** | Registration fails with duplicate email |
| **Priority** | High                                    |
| **Sprint**   | Sprint 1                                |

**Preconditions:**

- User with test@example.com already exists

**Test Steps:**

| Step | Action                                 | Expected Result           |
| ---- | -------------------------------------- | ------------------------- |
| 1    | Navigate to /register                  | Registration page loads   |
| 2    | Enter existing email: test@example.com | Email field accepts input |
| 3    | Fill all other fields                  | Fields accept input       |
| 4    | Click "Register" button                | Form submits              |
| 5    | Observe result                         | Error message displayed   |

**Expected Result:** Error: "Email already registered"  
**Actual Result:** ✅ As expected  
**Status:** ✅ Pass

---

### TC-004: Registration - Missing Required Fields

| Field        | Value                                         |
| ------------ | --------------------------------------------- |
| **ID**       | TC-004                                        |
| **Scenario** | Registration fails with empty required fields |
| **Priority** | Medium                                        |
| **Sprint**   | Sprint 1                                      |

**Test Steps:**

| Step | Action                  | Expected Result             |
| ---- | ----------------------- | --------------------------- |
| 1    | Navigate to /register   | Registration page loads     |
| 2    | Leave email empty       | Field empty                 |
| 3    | Click "Register" button | Form validation triggers    |
| 4    | Observe result          | Error shown for email field |

**Expected Result:** Validation error for required fields  
**Actual Result:** ✅ As expected  
**Status:** ✅ Pass

---

## Module 2: User Login

### TC-005: Login - Valid Credentials

| Field        | Value                                 |
| ------------ | ------------------------------------- |
| **ID**       | TC-005                                |
| **Scenario** | User can login with valid credentials |
| **Priority** | High                                  |
| **Sprint**   | Sprint 1                              |

**Preconditions:**

- User account exists
- User is not logged in

**Test Steps:**

| Step | Action                 | Expected Result              |
| ---- | ---------------------- | ---------------------------- |
| 1    | Navigate to /login     | Login page loads             |
| 2    | Enter valid email      | Email field accepts input    |
| 3    | Enter correct password | Password field accepts input |
| 4    | Click "Login" button   | Form submits                 |
| 5    | Observe result         | Redirect to dashboard        |

**Expected Result:** User logged in, redirected to dashboard  
**Actual Result:** ✅ As expected  
**Status:** ✅ Pass

---

### TC-006: Login - Invalid Credentials

| Field        | Value                           |
| ------------ | ------------------------------- |
| **ID**       | TC-006                          |
| **Scenario** | Login fails with wrong password |
| **Priority** | High                            |
| **Sprint**   | Sprint 1                        |

**Test Steps:**

| Step | Action               | Expected Result              |
| ---- | -------------------- | ---------------------------- |
| 1    | Navigate to /login   | Login page loads             |
| 2    | Enter valid email    | Email field accepts input    |
| 3    | Enter wrong password | Password field accepts input |
| 4    | Click "Login" button | Form submits                 |
| 5    | Observe result       | Error message displayed      |

**Expected Result:** Error: "Invalid credentials"  
**Actual Result:** ✅ As expected  
**Status:** ✅ Pass

---

### TC-007: Session Persistence

| Field        | Value                                   |
| ------------ | --------------------------------------- |
| **ID**       | TC-007                                  |
| **Scenario** | User stays logged in after page refresh |
| **Priority** | Medium                                  |
| **Sprint**   | Sprint 1                                |

**Preconditions:**

- User is logged in

**Test Steps:**

| Step | Action                   | Expected Result      |
| ---- | ------------------------ | -------------------- |
| 1    | Verify user is logged in | Dashboard visible    |
| 2    | Refresh the page (F5)    | Page reloads         |
| 3    | Observe result           | User still logged in |

**Expected Result:** Session persists, user remains logged in  
**Actual Result:** ✅ As expected  
**Status:** ✅ Pass

---

## Module 3: Item Posting

### TC-008: Post Item - Happy Path

| Field        | Value                               |
| ------------ | ----------------------------------- |
| **ID**       | TC-008                              |
| **Scenario** | Donor can post item with all fields |
| **Priority** | High                                |
| **Sprint**   | Sprint 2                            |

**Preconditions:**

- Logged in as Donor

**Test Steps:**

| Step | Action                    | Expected Result           |
| ---- | ------------------------- | ------------------------- |
| 1    | Navigate to /post-item    | Post item page loads      |
| 2    | Enter name: "Fresh Bread" | Field accepts input       |
| 3    | Enter quantity: 10        | Field accepts input       |
| 4    | Select future expiry date | Date picker works         |
| 5    | Upload JPG photo          | Photo preview shown       |
| 6    | Click "Post Item" button  | Form submits              |
| 7    | Observe result            | Success message, redirect |

**Expected Result:** Item created and visible in dashboard  
**Actual Result:** ✅ As expected  
**Status:** ✅ Pass

---

### TC-009: Post Item - Past Expiry Date

| Field        | Value                                  |
| ------------ | -------------------------------------- |
| **ID**       | TC-009                                 |
| **Scenario** | Cannot post item with past expiry date |
| **Priority** | High                                   |
| **Sprint**   | Sprint 2                               |

**Test Steps:**

| Step | Action                  | Expected Result          |
| ---- | ----------------------- | ------------------------ |
| 1    | Navigate to /post-item  | Post item page loads     |
| 2    | Enter item name         | Field accepts input      |
| 3    | Enter quantity          | Field accepts input      |
| 4    | Select past expiry date | Date selected            |
| 5    | Click "Post Item"       | Form validation triggers |

**Expected Result:** Error: "Expiry date must be in the future"  
**Actual Result:** ✅ As expected  
**Status:** ✅ Pass

---

### TC-010: Post Item - Photo Upload Validation

| Field        | Value                        |
| ------------ | ---------------------------- |
| **ID**       | TC-010                       |
| **Scenario** | Only JPG/PNG photos accepted |
| **Priority** | Medium                       |
| **Sprint**   | Sprint 2                     |

**Test Steps:**

| Step | Action                  | Expected Result              |
| ---- | ----------------------- | ---------------------------- |
| 1    | Navigate to /post-item  | Post item page loads         |
| 2    | Try to upload .gif file | File rejected or error       |
| 3    | Try to upload .pdf file | File rejected or error       |
| 4    | Upload valid .jpg file  | File accepted, preview shown |

**Expected Result:** Only JPG/PNG files accepted  
**Actual Result:** ✅ As expected  
**Status:** ✅ Pass

---

## Module 4: Dashboard & Real-Time

### TC-011: Dashboard - Display Items

| Field        | Value                           |
| ------------ | ------------------------------- |
| **ID**       | TC-011                          |
| **Scenario** | Dashboard shows available items |
| **Priority** | High                            |
| **Sprint**   | Sprint 2                        |

**Preconditions:**

- At least one available item exists

**Test Steps:**

| Step | Action                 | Expected Result                |
| ---- | ---------------------- | ------------------------------ |
| 1    | Login as any user      | Login successful               |
| 2    | Navigate to /dashboard | Dashboard loads                |
| 3    | Observe item cards     | Items displayed as cards       |
| 4    | Verify card content    | Shows name, qty, expiry, photo |

**Expected Result:** All available items displayed  
**Actual Result:** ✅ As expected  
**Status:** ✅ Pass

---

### TC-012: Real-Time - New Item Appears

| Field        | Value                            |
| ------------ | -------------------------------- |
| **ID**       | TC-012                           |
| **Scenario** | New item appears without refresh |
| **Priority** | High                             |
| **Sprint**   | Sprint 2                         |

**Preconditions:**

- Two browser windows open
- Both logged in

**Test Steps:**

| Step | Action                      | Expected Result            |
| ---- | --------------------------- | -------------------------- |
| 1    | Window A: Open dashboard    | Dashboard visible          |
| 2    | Window B: Login as donor    | Donor logged in            |
| 3    | Window B: Post new item     | Item created               |
| 4    | Window A: Observe dashboard | New item appears instantly |

**Expected Result:** New item appears in real-time (< 3 seconds)  
**Actual Result:** ✅ As expected  
**Status:** ✅ Pass

---

### TC-013: Real-Time - Claimed Item Disappears

| Field        | Value                                    |
| ------------ | ---------------------------------------- |
| **ID**       | TC-013                                   |
| **Scenario** | Claimed item removed from all dashboards |
| **Priority** | High                                     |
| **Sprint**   | Sprint 3                                 |

**Preconditions:**

- Two browser windows open
- Available item exists

**Test Steps:**

| Step | Action                               | Expected Result           |
| ---- | ------------------------------------ | ------------------------- |
| 1    | Window A: Open dashboard             | Item visible              |
| 2    | Window B: Open dashboard as receiver | Same item visible         |
| 3    | Window B: Click "Claim"              | Item claimed              |
| 4    | Window A: Observe dashboard          | Item disappears instantly |

**Expected Result:** Item removed from all dashboards in real-time  
**Actual Result:** ✅ As expected  
**Status:** ✅ Pass

---

## Module 5: Claim Functionality

### TC-014: Claim Item - Happy Path

| Field        | Value                             |
| ------------ | --------------------------------- |
| **ID**       | TC-014                            |
| **Scenario** | Receiver can claim available item |
| **Priority** | High                              |
| **Sprint**   | Sprint 3                          |

**Preconditions:**

- Logged in as Receiver
- Available item exists

**Test Steps:**

| Step | Action                | Expected Result        |
| ---- | --------------------- | ---------------------- |
| 1    | Navigate to dashboard | Items displayed        |
| 2    | Locate available item | Item card visible      |
| 3    | Click "Claim" button  | Button responds        |
| 4    | Observe result        | Success message shown  |
| 5    | Check My Claims page  | Item appears in claims |

**Expected Result:** Item claimed successfully  
**Actual Result:** ✅ As expected  
**Status:** ✅ Pass

---

### TC-015: Claim Item - Donor Cannot Claim

| Field        | Value                          |
| ------------ | ------------------------------ |
| **ID**       | TC-015                         |
| **Scenario** | Claim button hidden for donors |
| **Priority** | High                           |
| **Sprint**   | Sprint 3                       |

**Preconditions:**

- Logged in as Donor

**Test Steps:**

| Step | Action                | Expected Result         |
| ---- | --------------------- | ----------------------- |
| 1    | Navigate to dashboard | Items displayed         |
| 2    | Observe item cards    | Check for Claim button  |
| 3    | Result                | No Claim button visible |

**Expected Result:** Claim button not visible to donors  
**Actual Result:** ✅ As expected  
**Status:** ✅ Pass

---

### TC-016: Claim Item - Already Claimed

| Field        | Value                             |
| ------------ | --------------------------------- |
| **ID**       | TC-016                            |
| **Scenario** | Cannot claim already claimed item |
| **Priority** | Medium                            |
| **Sprint**   | Sprint 3                          |

**Test Steps:**

| Step | Action                               | Expected Result               |
| ---- | ------------------------------------ | ----------------------------- |
| 1    | Two receivers try to claim same item | Race condition                |
| 2    | First claim succeeds                 | Item status changes           |
| 3    | Second claim fails                   | Error: "Item already claimed" |

**Expected Result:** Only first claim succeeds  
**Actual Result:** ✅ As expected  
**Status:** ✅ Pass

---

## Module 6: UI/UX

### TC-017: Responsive Design - Mobile

| Field        | Value                        |
| ------------ | ---------------------------- |
| **ID**       | TC-017                       |
| **Scenario** | App works on mobile viewport |
| **Priority** | Medium                       |
| **Sprint**   | Sprint 4                     |

**Test Steps:**

| Step | Action                         | Expected Result            |
| ---- | ------------------------------ | -------------------------- |
| 1    | Open Chrome DevTools           | DevTools open              |
| 2    | Set viewport to 375px (iPhone) | Mobile view                |
| 3    | Navigate all pages             | All pages render correctly |
| 4    | Test forms                     | Forms are usable           |
| 5    | Test navigation                | Menu works                 |

**Expected Result:** All features work on mobile  
**Actual Result:** ✅ As expected  
**Status:** ✅ Pass

---

### TC-018: Loading States

| Field        | Value                                      |
| ------------ | ------------------------------------------ |
| **ID**       | TC-018                                     |
| **Scenario** | Loading indicators shown during operations |
| **Priority** | Low                                        |
| **Sprint**   | Sprint 4                                   |

**Test Steps:**

| Step | Action                 | Expected Result      |
| ---- | ---------------------- | -------------------- |
| 1    | Click Login button     | Button shows loading |
| 2    | Click Post Item button | Button shows loading |
| 3    | Click Claim button     | Button shows loading |

**Expected Result:** Loading states prevent double-clicks  
**Actual Result:** ✅ As expected  
**Status:** ✅ Pass

---

### TC-019: Empty States

| Field        | Value                      |
| ------------ | -------------------------- |
| **ID**       | TC-019                     |
| **Scenario** | Empty state messages shown |
| **Priority** | Low                        |
| **Sprint**   | Sprint 4                   |

**Preconditions:**

- New user with no data

**Test Steps:**

| Step | Action                      | Expected Result              |
| ---- | --------------------------- | ---------------------------- |
| 1    | Go to Dashboard (no items)  | "No items available" message |
| 2    | Go to My Posts (no posts)   | "No posts yet" message       |
| 3    | Go to My Claims (no claims) | "No claims yet" message      |

**Expected Result:** Friendly empty state messages  
**Actual Result:** ✅ As expected  
**Status:** ✅ Pass

---

## Module 7: Docker Deployment

### TC-020: Docker Compose - Production

| Field        | Value                                 |
| ------------ | ------------------------------------- |
| **ID**       | TC-020                                |
| **Scenario** | Full stack starts with docker-compose |
| **Priority** | Medium                                |
| **Sprint**   | Sprint 4                              |

**Test Steps:**

| Step | Action                          | Expected Result       |
| ---- | ------------------------------- | --------------------- |
| 1    | Run `docker-compose up --build` | Containers build      |
| 2    | Wait for startup                | Both services running |
| 3    | Access http://localhost:3000    | App loads             |
| 4    | Test core features              | All features work     |

**Expected Result:** Full app runs in Docker  
**Actual Result:** ✅ As expected  
**Status:** ✅ Pass

---

## Test Case Summary

| Module       | Total  | Passed | Failed | Pass Rate |
| ------------ | ------ | ------ | ------ | --------- |
| Registration | 4      | 4      | 0      | 100%      |
| Login        | 3      | 3      | 0      | 100%      |
| Item Posting | 3      | 3      | 0      | 100%      |
| Dashboard/RT | 3      | 3      | 0      | 100%      |
| Claim        | 3      | 3      | 0      | 100%      |
| UI/UX        | 3      | 3      | 0      | 100%      |
| Docker       | 1      | 1      | 0      | 100%      |
| **Total**    | **20** | **20** | **0**  | **100%**  |

---

_Test Cases maintained by the EcoChain QA Team_
