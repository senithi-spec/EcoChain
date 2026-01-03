# Product Backlog

**Project:** EcoChain  
**Version:** 2.0  
**Created:** December 5, 2025  
**Last Updated:** January 3, 2026

---

## Backlog Overview

This product backlog contains all user stories for the EcoChain project, prioritized by the Product Owner. Stories are organized by Epic and include acceptance criteria, story points, and sprint assignment.

> **Story Point Scale:** 1, 2, 3, 5, 8, 13 (Fibonacci)  
> **Priority:** High (must-have), Medium (should-have), Low (nice-to-have)

---

## Epic 1: User Authentication

### US-001: Donor Registration

| Field            | Value              |
| ---------------- | ------------------ |
| **ID**           | US-001             |
| **Title**        | Donor Registration |
| **Priority**     | High               |
| **Story Points** | 3                  |
| **Sprint**       | Sprint 1           |

**As a** food retailer (donor),  
**I want to** register an account with my business name and email,  
**So that** I can post surplus food items on the platform.

**Acceptance Criteria:**

- [ ] Registration form includes: email, business name, password, confirm password
- [ ] Form validates all fields are filled
- [ ] Email must be unique (error if duplicate)
- [ ] Password must be at least 6 characters
- [ ] Password is hashed before storage
- [ ] Role is set to "DONOR" automatically
- [ ] Success redirects to login page
- [ ] Error messages are user-friendly

---

### US-002: Receiver Registration

| Field            | Value                 |
| ---------------- | --------------------- |
| **ID**           | US-002                |
| **Title**        | Receiver Registration |
| **Priority**     | High                  |
| **Story Points** | 3                     |
| **Sprint**       | Sprint 1              |

**As a** charity organization (receiver),  
**I want to** register with my organization ID,  
**So that** I can claim available food items.

**Acceptance Criteria:**

- [ ] Registration form includes: email, name, Org ID, password, confirm password
- [ ] Org ID field appears when "Receiver" role is selected
- [ ] Org ID is required for receivers
- [ ] Role is set to "RECEIVER" automatically
- [ ] All donor registration validations apply
- [ ] Org ID is stored in database

---

### US-003: User Login

| Field            | Value      |
| ---------------- | ---------- |
| **ID**           | US-003     |
| **Title**        | User Login |
| **Priority**     | High       |
| **Story Points** | 2          |
| **Sprint**       | Sprint 1   |

**As a** registered user,  
**I want to** log in with my email and password,  
**So that** I can access my dashboard and features.

**Acceptance Criteria:**

- [ ] Login form includes: email, password
- [ ] Valid credentials return JWT token
- [ ] Token is stored in localStorage
- [ ] User is redirected to dashboard
- [ ] Invalid credentials show error message
- [ ] Form shows loading state during submission

---

### US-004: Persistent Session

| Field            | Value              |
| ---------------- | ------------------ |
| **ID**           | US-004             |
| **Title**        | Persistent Session |
| **Priority**     | Medium             |
| **Story Points** | 2                  |
| **Sprint**       | Sprint 1           |

**As a** logged-in user,  
**I want to** stay logged in across browser sessions,  
**So that** I don't have to log in every time.

**Acceptance Criteria:**

- [ ] JWT is stored in localStorage
- [ ] On app load, token is validated with `/api/auth/me`
- [ ] Valid token restores user session
- [ ] Invalid/expired token clears storage and redirects to login
- [ ] Logout clears token and user state

---

### US-005: Protected Routes

| Field            | Value            |
| ---------------- | ---------------- |
| **ID**           | US-005           |
| **Title**        | Protected Routes |
| **Priority**     | High             |
| **Story Points** | 2                |
| **Sprint**       | Sprint 1         |

**As a** system,  
**I want to** restrict access to authenticated users,  
**So that** unauthenticated users cannot access protected features.

**Acceptance Criteria:**

- [ ] Dashboard, PostItem, MyPosts, MyClaims require authentication
- [ ] Unauthenticated access redirects to login
- [ ] After login, user is redirected to intended page
- [ ] Navbar shows different options based on auth state

---

## Epic 2: Item Management

### US-006: Post Food Item

| Field            | Value          |
| ---------------- | -------------- |
| **ID**           | US-006         |
| **Title**        | Post Food Item |
| **Priority**     | High           |
| **Story Points** | 5              |
| **Sprint**       | Sprint 2       |

**As a** donor,  
**I want to** post surplus food items with details,  
**So that** receivers can see and claim them.

**Acceptance Criteria:**

- [ ] Form includes: item name, quantity, expiry date
- [ ] All fields are required
- [ ] Quantity must be a positive number
- [ ] Expiry date must be in the future
- [ ] Item is linked to donor's user ID
- [ ] Item status is set to "AVAILABLE"
- [ ] Success shows confirmation and clears form
- [ ] New item appears in real-time dashboard

---

### US-007: Photo Upload

| Field            | Value                  |
| ---------------- | ---------------------- |
| **ID**           | US-007                 |
| **Title**        | Photo Upload for Items |
| **Priority**     | Medium                 |
| **Story Points** | 5                      |
| **Sprint**       | Sprint 2               |

**As a** donor,  
**I want to** upload a photo of the food item,  
**So that** receivers can verify the quality.

**Acceptance Criteria:**

- [ ] Photo field is optional but encouraged
- [ ] Accept only JPG/PNG formats
- [ ] Maximum file size is 5MB
- [ ] Photo is stored in `/uploads` folder
- [ ] Photo URL is saved in database
- [ ] Photo displays on item card
- [ ] Invalid file type shows error

---

### US-008: View My Posted Items

| Field            | Value                |
| ---------------- | -------------------- |
| **ID**           | US-008               |
| **Title**        | View My Posted Items |
| **Priority**     | Medium               |
| **Story Points** | 3                    |
| **Sprint**       | Sprint 2             |

**As a** donor,  
**I want to** see a list of items I've posted,  
**So that** I can track their status.

**Acceptance Criteria:**

- [ ] "My Posts" page shows donor's items only
- [ ] Items show: name, quantity, expiry, status, photo
- [ ] Status indicates AVAILABLE, RESERVED, or COMPLETED
- [ ] Items ordered by creation date (newest first)
- [ ] Empty state shows helpful message

---

## Epic 3: Marketplace Dashboard

### US-009: Live Items Feed

| Field            | Value           |
| ---------------- | --------------- |
| **ID**           | US-009          |
| **Title**        | Live Items Feed |
| **Priority**     | High            |
| **Story Points** | 5               |
| **Sprint**       | Sprint 2        |

**As a** user,  
**I want to** see available food items in real-time,  
**So that** I can quickly identify items to claim or monitor.

**Acceptance Criteria:**

- [ ] Dashboard shows all items with status "AVAILABLE"
- [ ] Items display as cards with: name, quantity, expiry, photo, donor name
- [ ] Items ordered by creation date (newest first)
- [ ] Socket.io connection established on page load
- [ ] New items appear without page refresh
- [ ] Dashboard accessible to both donors and receivers

---

### US-010: Real-Time New Item

| Field            | Value                           |
| ---------------- | ------------------------------- |
| **ID**           | US-010                          |
| **Title**        | Real-Time New Item Notification |
| **Priority**     | High                            |
| **Story Points** | 3                               |
| **Sprint**       | Sprint 2                        |

**As a** receiver viewing the dashboard,  
**I want to** see new items appear automatically,  
**So that** I can claim them before others.

**Acceptance Criteria:**

- [ ] Server emits `item:new` event when item is posted
- [ ] Client listens for `item:new` and adds to list
- [ ] New item appears at top of feed
- [ ] No page refresh required
- [ ] Works across multiple browser tabs/users

---

### US-011: Real-Time Item Removal

| Field            | Value                          |
| ---------------- | ------------------------------ |
| **ID**           | US-011                         |
| **Title**        | Real-Time Claimed Item Removal |
| **Priority**     | High                           |
| **Story Points** | 3                              |
| **Sprint**       | Sprint 3                       |

**As a** user viewing the dashboard,  
**I want to** see claimed items disappear automatically,  
**So that** I don't try to claim unavailable items.

**Acceptance Criteria:**

- [ ] Server emits `item:claimed` event with itemId
- [ ] Client listens and removes item from list
- [ ] Removal is immediate (no delay)
- [ ] Works across all connected clients

---

## Epic 4: Claim Management

### US-012: Claim Item

| Field            | Value           |
| ---------------- | --------------- |
| **ID**           | US-012          |
| **Title**        | Claim Food Item |
| **Priority**     | High            |
| **Story Points** | 8               |
| **Sprint**       | Sprint 3        |

**As a** receiver,  
**I want to** claim an available food item,  
**So that** it is reserved for my organization.

**Acceptance Criteria:**

- [ ] "Claim" button visible only to receiver users
- [ ] Clicking claim calls `PATCH /api/items/:id/claim`
- [ ] Server validates user is a receiver
- [ ] Server validates item is AVAILABLE
- [ ] Item status changes to RESERVED
- [ ] Receiver ID linked to item
- [ ] Socket event broadcasts item removal
- [ ] Success message shown to user
- [ ] Button disabled during API call

---

### US-013: View My Claimed Items

| Field            | Value                 |
| ---------------- | --------------------- |
| **ID**           | US-013                |
| **Title**        | View My Claimed Items |
| **Priority**     | Medium                |
| **Story Points** | 3                     |
| **Sprint**       | Sprint 3              |

**As a** receiver,  
**I want to** see a list of items I've claimed,  
**So that** I can track pickups.

**Acceptance Criteria:**

- [ ] "My Claims" page shows receiver's claimed items
- [ ] Items show: name, quantity, expiry, donor name, claim date
- [ ] Items ordered by claim date (newest first)
- [ ] Only RESERVED and COMPLETED items shown
- [ ] Empty state shows helpful message

---

### US-014: Role-Based Claim Button

| Field            | Value                       |
| ---------------- | --------------------------- |
| **ID**           | US-014                      |
| **Title**        | Role-Based Claim Visibility |
| **Priority**     | High                        |
| **Story Points** | 2                           |
| **Sprint**       | Sprint 3                    |

**As a** system,  
**I want to** hide the claim button from donors,  
**So that** only receivers can claim items.

**Acceptance Criteria:**

- [ ] Claim button hidden for DONOR role
- [ ] Claim button visible for RECEIVER role
- [ ] Server rejects claim attempts from donors (403)
- [ ] Donor sees "Posted by you" badge on own items

---

## Epic 5: UI/UX Enhancements

### US-015: macOS-Inspired Theme

| Field            | Value                   |
| ---------------- | ----------------------- |
| **ID**           | US-015                  |
| **Title**        | macOS-Inspired UI Theme |
| **Priority**     | Medium                  |
| **Story Points** | 5                       |
| **Sprint**       | Sprint 4                |

**As a** user,  
**I want to** use a modern, visually appealing interface,  
**So that** the platform feels professional and trustworthy.

**Acceptance Criteria:**

- [ ] Custom Tailwind theme with macOS color palette
- [ ] Glass morphism effect on cards (backdrop-blur)
- [ ] Subtle shadows and rounded corners
- [ ] Consistent typography (system-ui font)
- [ ] Button styles match macOS aesthetic
- [ ] Smooth hover transitions

---

### US-016: Responsive Design

| Field            | Value                    |
| ---------------- | ------------------------ |
| **ID**           | US-016                   |
| **Title**        | Mobile Responsive Layout |
| **Priority**     | Medium                   |
| **Story Points** | 3                        |
| **Sprint**       | Sprint 4                 |

**As a** mobile user,  
**I want to** use the platform on my phone,  
**So that** I can post or claim items on the go.

**Acceptance Criteria:**

- [ ] All pages work on 320px screen width
- [ ] Navigation collapses to mobile menu
- [ ] Cards stack vertically on small screens
- [ ] Forms are full-width on mobile
- [ ] Touch targets are at least 44px

---

### US-017: Loading States

| Field            | Value                    |
| ---------------- | ------------------------ |
| **ID**           | US-017                   |
| **Title**        | Loading State Indicators |
| **Priority**     | Low                      |
| **Story Points** | 2                        |
| **Sprint**       | Sprint 4                 |

**As a** user,  
**I want to** see loading indicators during operations,  
**So that** I know the system is working.

**Acceptance Criteria:**

- [ ] Button shows spinner during form submission
- [ ] Dashboard shows loading state while fetching items
- [ ] Skeleton loaders for card placeholders
- [ ] Loading state prevents double-submission

---

### US-018: Empty States

| Field            | Value                |
| ---------------- | -------------------- |
| **ID**           | US-018               |
| **Title**        | Empty State Messages |
| **Priority**     | Low                  |
| **Story Points** | 2                    |
| **Sprint**       | Sprint 4             |

**As a** user,  
**I want to** see helpful messages when no data exists,  
**So that** I'm not confused by blank pages.

**Acceptance Criteria:**

- [ ] Dashboard: "No items available yet. Check back soon!"
- [ ] My Posts: "You haven't posted any items yet."
- [ ] My Claims: "You haven't claimed any items yet."
- [ ] Empty states include call-to-action button

---

## Epic 6: DevOps & Documentation

### US-019: Docker Support

| Field            | Value                   |
| ---------------- | ----------------------- |
| **ID**           | US-019                  |
| **Title**        | Docker Containerization |
| **Priority**     | Medium                  |
| **Story Points** | 5                       |
| **Sprint**       | Sprint 4                |

**As a** developer,  
**I want to** run the project with Docker,  
**So that** I can easily set up the development environment.

**Acceptance Criteria:**

- [ ] Dockerfile for backend (Node.js)
- [ ] Dockerfile for frontend (Vite dev, nginx prod)
- [ ] docker-compose.yml for production
- [ ] docker-compose.dev.yml for development with hot reload
- [ ] One command starts entire stack
- [ ] Volumes persist database and uploads

---

### US-020: Project Documentation

| Field            | Value                |
| ---------------- | -------------------- |
| **ID**           | US-020               |
| **Title**        | README Documentation |
| **Priority**     | Medium               |
| **Story Points** | 3                    |
| **Sprint**       | Sprint 4             |

**As a** new developer,  
**I want to** read comprehensive documentation,  
**So that** I can set up and understand the project.

**Acceptance Criteria:**

- [ ] README includes project overview
- [ ] Setup instructions for manual and Docker
- [ ] API endpoint documentation
- [ ] Project structure explanation
- [ ] Tech stack table
- [ ] Testing checklist

---

### US-021: Agile Documentation

| Field            | Value                    |
| ---------------- | ------------------------ |
| **ID**           | US-021                   |
| **Title**        | Complete Agile Artifacts |
| **Priority**     | High                     |
| **Story Points** | 8                        |
| **Sprint**       | Buffer                   |

**As a** team,  
**I want to** have complete Scrum documentation,  
**So that** we can demonstrate proper Agile methodology.

**Acceptance Criteria:**

- [ ] Product Vision document
- [ ] MVP and MRF definitions
- [ ] Product Backlog with user stories
- [ ] Sprint Plans for all 4 sprints
- [ ] Definition of Done
- [ ] QA test documents
- [ ] Burndown/velocity metrics

---

## Epic 7: Error Handling

### US-022: Form Validation Errors

| Field            | Value                       |
| ---------------- | --------------------------- |
| **ID**           | US-022                      |
| **Title**        | Client-Side Form Validation |
| **Priority**     | Medium                      |
| **Story Points** | 3                           |
| **Sprint**       | Sprint 4                    |

**As a** user,  
**I want to** see validation errors before submitting,  
**So that** I can fix issues immediately.

**Acceptance Criteria:**

- [x] Required fields show error if empty
- [x] Email field validates format
- [x] Password shows minimum length requirement
- [x] Expiry date shows error if in past
- [x] Errors appear inline below fields
- [x] Errors clear when field is corrected

---

### US-023: API Error Handling

| Field            | Value                       |
| ---------------- | --------------------------- |
| **ID**           | US-023                      |
| **Title**        | Graceful API Error Handling |
| **Priority**     | Medium                      |
| **Story Points** | 3                           |
| **Sprint**       | Sprint 4                    |

**As a** user,  
**I want to** see friendly error messages for server errors,  
**So that** I understand what went wrong.

**Acceptance Criteria:**

- [x] 400 errors show validation message from server
- [x] 401 errors redirect to login
- [x] 403 errors show "Not authorized" message
- [x] 404 errors show "Not found" message
- [x] 500 errors show generic "Something went wrong"
- [x] Network errors suggest checking connection

---

## Epic 8: Collection Workflow Enhancement

### US-024: Cancel Reservation

| Field            | Value                   |
| ---------------- | ----------------------- |
| **ID**           | US-024                  |
| **Title**        | Cancel Item Reservation |
| **Priority**     | Medium                  |
| **Story Points** | 3                       |
| **Sprint**       | Sprint 5                |

**As a** receiver,  
**I want to** cancel my claim on a reserved item,  
**So that** other organizations can claim it if I can't collect it.

**Acceptance Criteria:**

- [x] "Cancel Claim" button visible on reserved items in My Claims
- [x] Clicking cancel calls `PATCH /api/items/:id/cancel`
- [x] Server validates user is the item's receiver
- [x] Item status changes back to AVAILABLE
- [x] Receiver ID is cleared from item
- [x] Socket event broadcasts item availability
- [x] Item reappears on dashboard for other receivers
- [x] Success message shown to user

---

### US-025: Mark Item as Collected

| Field            | Value                  |
| ---------------- | ---------------------- |
| **ID**           | US-025                 |
| **Title**        | Mark Item as Collected |
| **Priority**     | Medium                 |
| **Story Points** | 3                      |
| **Sprint**       | Sprint 5               |

**As a** donor or receiver,  
**I want to** mark a reserved item as collected/completed,  
**So that** the donation cycle is properly tracked.

**Acceptance Criteria:**

- [x] "Mark Collected" button visible on reserved items
- [x] Both donor and receiver can mark as completed
- [x] Clicking calls `PATCH /api/items/:id/complete`
- [x] Item status changes to COMPLETED
- [x] `collectedAt` timestamp is recorded
- [x] Socket event broadcasts completion
- [x] Item status updated in My Posts and My Claims
- [x] Success message shown to user

---

### US-026: Collection Location

| Field            | Value                    |
| ---------------- | ------------------------ |
| **ID**           | US-026                   |
| **Title**        | Donor Collection Address |
| **Priority**     | Medium                   |
| **Story Points** | 3                        |
| **Sprint**       | Sprint 5                 |

**As a** donor,  
**I want to** provide my collection address during registration,  
**So that** receivers know where to pick up items.

**Acceptance Criteria:**

- [x] Address field added to donor registration form
- [x] Address is required for donors
- [x] Address stored in User record
- [x] Address displayed on item cards for receivers
- [x] Address visible in My Claims collection details

---

### US-027: Contact Phone Number

| Field            | Value              |
| ---------------- | ------------------ |
| **ID**           | US-027             |
| **Title**        | User Contact Phone |
| **Priority**     | Medium             |
| **Story Points** | 2                  |
| **Sprint**       | Sprint 5           |

**As a** user,  
**I want to** provide my phone number,  
**So that** I can be contacted for pickup coordination.

**Acceptance Criteria:**

- [x] Phone field added to registration form
- [x] Phone is required for all users
- [x] Phone stored in User record
- [x] Donor phone visible in receiver's My Claims
- [x] Receiver phone visible in donor's My Posts (when reserved)

---

### US-028: Pickup Instructions

| Field            | Value                    |
| ---------------- | ------------------------ |
| **ID**           | US-028                   |
| **Title**        | Item Pickup Instructions |
| **Priority**     | Medium                   |
| **Story Points** | 2                        |
| **Sprint**       | Sprint 5                 |

**As a** donor,  
**I want to** add pickup instructions when posting an item,  
**So that** receivers know how and when to collect.

**Acceptance Criteria:**

- [x] Pickup notes field added to item posting form
- [x] Pickup notes are optional
- [x] Notes stored in Item record
- [x] Notes displayed on item cards
- [x] Notes visible in My Claims collection details

---

## Backlog Summary

| Priority  | Count  | Story Points |
| --------- | ------ | ------------ |
| High      | 12     | 43           |
| Medium    | 14     | 49           |
| Low       | 2      | 4            |
| **Total** | **28** | **96**       |

---

## Sprint Allocation

| Sprint   | Stories                          | Story Points |
| -------- | -------------------------------- | ------------ |
| Sprint 1 | US-001 to US-005                 | 12           |
| Sprint 2 | US-006 to US-010                 | 21           |
| Sprint 3 | US-011 to US-014                 | 16           |
| Sprint 4 | US-015 to US-020, US-022, US-023 | 26           |
| Sprint 5 | US-024 to US-028                 | 13           |
| Buffer   | US-021                           | 8            |

---

_Backlog maintained by the EcoChain Product Owner_
_Last Updated: January 3, 2026_
