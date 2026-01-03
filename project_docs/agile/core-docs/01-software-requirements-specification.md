# Software Requirements Specification (SRS)

**Project Name:** EcoChain — Local Supply Chain Food Waste Reducer  
**Document Version:** 3.0  
**Date:** January 3, 2026  
**Status:** Approved  
**Classification:** Internal Use Only

---

## Document Control

| Version | Date       | Author        | Changes                                                |
| ------- | ---------- | ------------- | ------------------------------------------------------ |
| 1.0     | 2025-12-28 | EcoChain Team | Initial draft                                          |
| 2.0     | 2026-01-03 | EcoChain Team | Industry standard update, added traceability           |
| 3.0     | 2026-01-03 | EcoChain Team | Added collection workflow: cancel, complete, addresses |

### Approval Signatures

| Role              | Name         | Date       | Signature  |
| ----------------- | ------------ | ---------- | ---------- |
| Product Owner     | EcoChain PO  | 2026-01-03 | _Approved_ |
| Technical Lead    | EcoChain Dev | 2026-01-03 | _Approved_ |
| Quality Assurance | EcoChain QA  | 2026-01-03 | _Approved_ |

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Overall Description](#2-overall-description)
3. [System Architecture](#3-system-architecture)
4. [Functional Requirements](#4-functional-requirements)
5. [Non-Functional Requirements](#5-non-functional-requirements)
6. [External Interface Requirements](#6-external-interface-requirements)
7. [Data Requirements](#7-data-requirements)
8. [Security Requirements](#8-security-requirements)
9. [Constraints and Assumptions](#9-constraints-and-assumptions)
10. [Appendices](#10-appendices)

---

## 1. Introduction

### 1.1 Purpose

This Software Requirements Specification (SRS) document provides a complete and detailed description of the functional and non-functional requirements for the EcoChain platform. It serves as the authoritative reference for:

- Development team implementation
- Quality assurance testing
- Stakeholder acceptance criteria
- Project scope management

This document follows the IEEE 830-1998 standard for software requirements specifications.

### 1.2 Scope

**EcoChain** is a web-based platform designed to reduce food waste in local supply chains by connecting food donors (retailers, bakeries, restaurants) with food receivers (charities, food banks, community organizations).

#### 1.2.1 System Boundaries

| In Scope                             | Out of Scope                     |
| ------------------------------------ | -------------------------------- |
| User registration and authentication | Payment processing               |
| Food item posting and management     | Delivery/logistics coordination  |
| Real-time marketplace dashboard      | Mobile native applications       |
| Claim and reservation system         | Inventory management integration |
| Basic status tracking                | Advanced analytics/reporting     |
| Docker containerization              | Multi-language support           |

#### 1.2.2 Product Value

- **Environmental Impact:** Reduces food waste sent to landfills
- **Social Impact:** Provides food to communities in need
- **Economic Impact:** Reduces disposal costs for businesses

### 1.3 Definitions, Acronyms, and Abbreviations

| Term          | Definition                                                                  |
| ------------- | --------------------------------------------------------------------------- |
| **Donor**     | A business entity (retailer, bakery, restaurant) that supplies surplus food |
| **Receiver**  | An organization (charity, food bank, orphanage) that claims donated food    |
| **Item**      | A food listing posted by a donor for donation                               |
| **Claim**     | The action of a receiver reserving an available item                        |
| **MVP**       | Minimum Viable Product — core features for initial release                  |
| **MRF**       | Minimally Releasable Features — enhanced features for production release    |
| **JWT**       | JSON Web Token — authentication mechanism                                   |
| **API**       | Application Programming Interface                                           |
| **REST**      | Representational State Transfer — API architectural style                   |
| **ORM**       | Object-Relational Mapping — database abstraction layer                      |
| **SPA**       | Single Page Application — frontend architecture                             |
| **WebSocket** | Full-duplex communication protocol for real-time features                   |

### 1.4 References

| Document                  | Version | Description                             |
| ------------------------- | ------- | --------------------------------------- |
| Product Vision            | 1.0     | Project goals and target users          |
| Product Backlog           | 1.0     | User stories and acceptance criteria    |
| Definition of Done        | 1.0     | Completion criteria for stories         |
| IEEE 830-1998             | —       | SRS standard                            |
| OWASP Security Guidelines | —       | Web application security best practices |

### 1.5 Document Overview

- **Section 2:** High-level product perspective and user characteristics
- **Section 3:** System architecture and technology stack
- **Section 4:** Detailed functional requirements with traceability
- **Section 5:** Non-functional requirements (performance, security, etc.)
- **Section 6:** External interfaces (UI, API, hardware)
- **Section 7:** Data models and storage requirements
- **Section 8:** Security requirements and considerations
- **Section 9:** Constraints, assumptions, and dependencies
- **Section 10:** Appendices with supplementary information

---

## 2. Overall Description

### 2.1 Product Perspective

EcoChain is a standalone web application that addresses inefficiencies in traditional food donation methods. The system provides:

- A centralized platform replacing phone calls, emails, and manual coordination
- Real-time visibility into available donations
- Instant claiming mechanism to prevent food spoilage
- Digital record-keeping for all transactions

#### 2.1.1 System Context Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                           ECOCHAIN SYSTEM                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────┐         ┌──────────────┐         ┌──────────┐        │
│  │  DONOR   │◀───────▶│   WEB APP    │◀───────▶│ RECEIVER │        │
│  │  (User)  │         │  (Frontend)  │         │  (User)  │        │
│  └──────────┘         └──────┬───────┘         └──────────┘        │
│                              │                                      │
│                              ▼                                      │
│                       ┌──────────────┐                             │
│                       │   REST API   │                             │
│                       │  (Backend)   │                             │
│                       └──────┬───────┘                             │
│                              │                                      │
│              ┌───────────────┼───────────────┐                     │
│              ▼               ▼               ▼                     │
│       ┌──────────┐    ┌──────────┐    ┌──────────┐                │
│       │  SQLite  │    │  Socket  │    │  File    │                │
│       │ Database │    │   .io    │    │ Storage  │                │
│       └──────────┘    └──────────┘    └──────────┘                │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### 2.2 Product Functions

| Function Category | Primary Capabilities                            |
| ----------------- | ----------------------------------------------- |
| User Management   | Registration, authentication, role-based access |
| Item Management   | Create, read, update food item listings         |
| Marketplace       | Real-time dashboard of available items          |
| Claim System      | Reserve items, update status, track claims      |
| Notifications     | Real-time updates via WebSocket                 |

### 2.3 User Classes and Characteristics

#### 2.3.1 Donor (Food Supplier)

| Attribute           | Description                                         |
| ------------------- | --------------------------------------------------- |
| **Profile**         | Retail staff, bakery owners, restaurant managers    |
| **Technical Skill** | Basic computer literacy, smartphone familiarity     |
| **Usage Frequency** | Daily, typically at end of business day             |
| **Primary Goal**    | Quickly list surplus items to avoid disposal        |
| **Key Need**        | Fast, simple interface with minimal required fields |

#### 2.3.2 Receiver (Charity Organization)

| Attribute           | Description                                        |
| ------------------- | -------------------------------------------------- |
| **Profile**         | Charity coordinators, food bank volunteers         |
| **Technical Skill** | Basic to intermediate computer literacy            |
| **Usage Frequency** | Multiple times daily, monitoring for new donations |
| **Primary Goal**    | Find and claim available food quickly              |
| **Key Need**        | Real-time visibility, instant claiming             |

#### 2.3.3 System Administrator

| Attribute           | Description                                       |
| ------------------- | ------------------------------------------------- |
| **Profile**         | Platform operators, technical support staff       |
| **Technical Skill** | Advanced technical knowledge                      |
| **Usage Frequency** | As needed for platform management                 |
| **Primary Goal**    | Ensure platform reliability and user verification |
| **Key Need**        | Administrative controls, monitoring capabilities  |

### 2.4 Operating Environment

#### 2.4.1 Client Environment

| Requirement     | Specification                                    |
| --------------- | ------------------------------------------------ |
| **Browsers**    | Chrome 90+, Firefox 88+, Safari 14+, Edge 90+    |
| **Screen Size** | Minimum 320px width (mobile) to 2560px (desktop) |
| **JavaScript**  | ES6+ support required                            |
| **Network**     | Broadband internet connection                    |

#### 2.4.2 Server Environment

| Component     | Specification                                         |
| ------------- | ----------------------------------------------------- |
| **Runtime**   | Node.js 18.x or higher                                |
| **Database**  | SQLite 3.x (development), PostgreSQL 14+ (production) |
| **Storage**   | Local file system for uploads                         |
| **Container** | Docker 20.x with Docker Compose 2.x                   |

### 2.5 Design and Implementation Constraints

| Constraint Category | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| **Timeline**        | 4-week development cycle (December 5, 2025 - January 1, 2026) |
| **Team Size**       | Small team requiring members to fulfill multiple roles        |
| **Technology**      | Must use React for frontend, Express for backend              |
| **Deployment**      | Must support Docker containerization                          |
| **Budget**          | Zero infrastructure cost (SQLite, local storage)              |

### 2.6 Assumptions and Dependencies

#### 2.6.1 Assumptions

1. Users have access to a modern web browser
2. Users have stable internet connectivity
3. Donors will post items in good faith (edible, quality)
4. Receivers will collect claimed items in a timely manner
5. Photo uploads accurately represent item condition

#### 2.6.2 Dependencies

| Dependency      | Impact if Unavailable           |
| --------------- | ------------------------------- |
| Node.js runtime | Backend cannot execute          |
| npm packages    | Application cannot build or run |
| SQLite/Prisma   | Data persistence unavailable    |
| Socket.io       | Real-time features disabled     |

---

## 3. System Architecture

### 3.1 Architecture Overview

EcoChain follows a three-tier architecture pattern:

```
┌─────────────────────────────────────────────────────────────────────┐
│                        PRESENTATION TIER                             │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │                    React SPA (Vite Build)                      │  │
│  │  • Components: Navbar, ItemCard, Forms                         │  │
│  │  • State: React Context (AuthContext)                          │  │
│  │  • Routing: React Router v6                                    │  │
│  │  • Styling: Tailwind CSS (macOS-inspired theme)                │  │
│  │  • Real-time: Socket.io Client                                 │  │
│  └───────────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────────┤
│                        APPLICATION TIER                              │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │                    Express.js REST API                         │  │
│  │  • Routes: /api/auth/*, /api/items/*                           │  │
│  │  • Controllers: authController, itemController                 │  │
│  │  • Middleware: authMiddleware (JWT validation)                 │  │
│  │  • File Upload: Multer                                         │  │
│  │  • Real-time: Socket.io Server                                 │  │
│  └───────────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────────┤
│                          DATA TIER                                   │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │                    SQLite + Prisma ORM                         │  │
│  │  • Models: User, Item                                          │  │
│  │  • File: prisma/dev.db                                         │  │
│  │  • Migrations: Prisma db push                                  │  │
│  └───────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
```

### 3.2 Technology Stack

| Layer        | Technology       | Version | Purpose                       |
| ------------ | ---------------- | ------- | ----------------------------- |
| **Frontend** | React            | 18.x    | UI component library          |
|              | Vite             | 5.x     | Build tool and dev server     |
|              | Tailwind CSS     | 3.x     | Utility-first styling         |
|              | React Router     | 6.x     | Client-side routing           |
|              | Socket.io-client | 4.x     | Real-time communication       |
|              | Axios            | 1.x     | HTTP client                   |
| **Backend**  | Node.js          | 18.x    | Runtime environment           |
|              | Express.js       | 4.x     | Web framework                 |
|              | Prisma           | 5.x     | ORM and database toolkit      |
|              | Socket.io        | 4.x     | WebSocket server              |
|              | JSON Web Token   | 9.x     | Authentication                |
|              | bcryptjs         | 2.x     | Password hashing              |
|              | Multer           | 1.x     | File upload handling          |
| **Database** | SQLite           | 3.x     | Relational database           |
| **DevOps**   | Docker           | 20.x    | Containerization              |
|              | Docker Compose   | 2.x     | Multi-container orchestration |
|              | nginx            | 1.25    | Reverse proxy (production)    |

### 3.3 Component Diagram

```
┌──────────────────────────────────────────────────────────────────────────┐
│                              FRONTEND                                     │
│                                                                           │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │   Navbar    │  │  Dashboard  │  │  PostItem   │  │   MyPosts   │     │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │   Login     │  │  Register   │  │  MyClaims   │  │  ItemCard   │     │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘     │
│                          │                                               │
│                          ▼                                               │
│                   ┌─────────────┐                                        │
│                   │ AuthContext │                                        │
│                   └─────────────┘                                        │
└──────────────────────────────────────────────────────────────────────────┘
                           │
                           ▼ HTTP/WebSocket
┌──────────────────────────────────────────────────────────────────────────┐
│                              BACKEND                                      │
│                                                                           │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │                         Express Server                               │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │ │
│  │  │ authRoutes   │  │ itemRoutes   │  │ staticFiles  │              │ │
│  │  └──────────────┘  └──────────────┘  └──────────────┘              │ │
│  │         │                  │                                        │ │
│  │         ▼                  ▼                                        │ │
│  │  ┌──────────────┐  ┌──────────────┐                                │ │
│  │  │authController│  │itemController│                                │ │
│  │  └──────────────┘  └──────────────┘                                │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
│                           │                                              │
│                           ▼                                              │
│                    ┌─────────────┐                                       │
│                    │   Prisma    │                                       │
│                    │   Client    │                                       │
│                    └─────────────┘                                       │
└──────────────────────────────────────────────────────────────────────────┘
                           │
                           ▼
                    ┌─────────────┐
                    │   SQLite    │
                    │   dev.db    │
                    └─────────────┘
```

---

## 4. Functional Requirements

### 4.1 Requirement Traceability Matrix

| REQ ID | Description             | Priority | User Story | Sprint | Status      |
| ------ | ----------------------- | -------- | ---------- | ------ | ----------- |
| FR-1.1 | Donor Registration      | High     | US-001     | 1      | ✅ Complete |
| FR-1.2 | Receiver Registration   | High     | US-002     | 1      | ✅ Complete |
| FR-1.3 | User Login              | High     | US-003     | 1      | ✅ Complete |
| FR-1.4 | Persistent Session      | Medium   | US-004     | 1      | ✅ Complete |
| FR-1.5 | Protected Routes        | High     | US-005     | 1      | ✅ Complete |
| FR-2.1 | Post Food Item          | High     | US-006     | 2      | ✅ Complete |
| FR-2.2 | Photo Upload            | Medium   | US-007     | 2      | ✅ Complete |
| FR-2.3 | View My Posted Items    | Medium   | US-008     | 2      | ✅ Complete |
| FR-3.1 | Live Items Feed         | High     | US-009     | 2      | ✅ Complete |
| FR-3.2 | Real-Time New Item      | High     | US-010     | 2      | ✅ Complete |
| FR-3.3 | Real-Time Item Removal  | High     | US-011     | 3      | ✅ Complete |
| FR-4.1 | Claim Item              | High     | US-012     | 3      | ✅ Complete |
| FR-4.2 | View My Claimed Items   | Medium   | US-013     | 3      | ✅ Complete |
| FR-4.3 | Role-Based Claim Button | High     | US-014     | 3      | ✅ Complete |
| FR-4.4 | Cancel Reservation      | Medium   | US-024     | 5      | ✅ Complete |
| FR-4.5 | Mark Item as Collected  | Medium   | US-025     | 5      | ✅ Complete |
| FR-5.1 | macOS-Inspired Theme    | Medium   | US-015     | 4      | ✅ Complete |
| FR-5.2 | Responsive Design       | Medium   | US-016     | 4      | ✅ Complete |
| FR-5.3 | Loading States          | Low      | US-017     | 4      | ✅ Complete |
| FR-5.4 | Empty States            | Low      | US-018     | 4      | ✅ Complete |
| FR-6.1 | Docker Support          | Medium   | US-019     | 4      | ✅ Complete |
| FR-6.2 | Project Documentation   | Medium   | US-020     | 4      | ✅ Complete |
| FR-7.1 | Collection Location     | Medium   | US-026     | 5      | ✅ Complete |
| FR-7.2 | Contact Phone Number    | Medium   | US-027     | 5      | ✅ Complete |
| FR-7.3 | Pickup Instructions     | Medium   | US-028     | 5      | ✅ Complete |

---

### 4.2 Feature: User Authentication (FR-1.x)

#### FR-1.1 Donor Registration

**Description:** Allow food retailers to create donor accounts.

| Attribute        | Value                                     |
| ---------------- | ----------------------------------------- |
| **Priority**     | High                                      |
| **Source**       | Product Owner                             |
| **Rationale**    | Donors must be registered to post items   |
| **Dependencies** | Database schema, password hashing library |

**Inputs:**
| Field | Type | Validation | Required |
| --------------- | ------- | --------------------------------------------- | -------- |
| email | String | Valid email format, unique | Yes |
| name | String | 2-100 characters | Yes |
| password | String | Minimum 6 characters | Yes |
| confirmPassword | String | Must match password | Yes |
| role | String | Must be "DONOR" | Yes |

**Processing:**

1. Validate all input fields
2. Check email uniqueness in database
3. Hash password using bcrypt (12 rounds)
4. Create user record with role="DONOR"
5. Return success response

**Outputs:**
| Condition | Response Code | Response Body |
| --------------- | ------------- | ------------------------------------------ |
| Success | 201 | `{ message: "Registration successful" }` |
| Duplicate email | 400 | `{ error: "Email already registered" }` |
| Validation fail | 400 | `{ error: "<field> is required" }` |
| Server error | 500 | `{ error: "Registration failed" }` |

---

#### FR-1.2 Receiver Registration

**Description:** Allow charity organizations to create receiver accounts.

| Attribute        | Value                                    |
| ---------------- | ---------------------------------------- |
| **Priority**     | High                                     |
| **Source**       | Product Owner                            |
| **Rationale**    | Receivers must be verified organizations |
| **Dependencies** | FR-1.1 (shares registration logic)       |

**Additional Inputs:**
| Field | Type | Validation | Required |
| ------ | ------ | ------------------------------------ | ---------------- |
| orgId | String | Organization identifier | Yes (receivers) |

**Processing:**

1. All FR-1.1 validations apply
2. Validate orgId is provided for receivers
3. Create user record with role="RECEIVER"
4. Store orgId in user record

---

#### FR-1.3 User Login

**Description:** Authenticate users and provide access tokens.

| Attribute        | Value                               |
| ---------------- | ----------------------------------- |
| **Priority**     | High                                |
| **Source**       | Product Owner                       |
| **Rationale**    | Secure access to protected features |
| **Dependencies** | JWT library, bcrypt                 |

**Inputs:**
| Field | Type | Validation | Required |
| -------- | ------ | -------------------- | -------- |
| email | String | Valid email format | Yes |
| password | String | Non-empty | Yes |

**Processing:**

1. Find user by email
2. Compare password hash using bcrypt
3. Generate JWT token (24-hour expiry)
4. Return token and user data

**Outputs:**
| Condition | Response Code | Response Body |
| ------------------ | ------------- | ----------------------------------------------- |
| Success | 200 | `{ token, user: { id, email, name, role } }` |
| Invalid email | 401 | `{ error: "Invalid credentials" }` |
| Invalid password | 401 | `{ error: "Invalid credentials" }` |
| Missing fields | 400 | `{ error: "Email and password required" }` |

---

#### FR-1.4 Persistent Session

**Description:** Maintain user sessions across browser refreshes.

**Processing:**

1. On app load, check localStorage for JWT token
2. If token exists, call `/api/auth/me` to validate
3. If valid, restore user state in AuthContext
4. If invalid/expired, clear storage and redirect to login

---

#### FR-1.5 Protected Routes

**Description:** Restrict access to authenticated users only.

**Protected Routes:**

- `/dashboard` — Marketplace view
- `/post-item` — Item creation (donors only)
- `/my-posts` — Donor's posted items
- `/my-claims` — Receiver's claimed items

**Processing:**

1. AuthMiddleware intercepts requests
2. Extract JWT from Authorization header
3. Verify token signature and expiry
4. Attach user object to request
5. If invalid, return 401 Unauthorized

---

### 4.3 Feature: Item Management (FR-2.x)

#### FR-2.1 Post Food Item

**Description:** Allow donors to list surplus food items.

| Attribute        | Value                                |
| ---------------- | ------------------------------------ |
| **Priority**     | High                                 |
| **Source**       | Product Owner                        |
| **Rationale**    | Core functionality for food donation |
| **Dependencies** | FR-1.3 (authentication), database    |

**Inputs:**
| Field | Type | Validation | Required |
| -------- | -------- | ----------------------------------------- | -------- |
| name | String | 2-200 characters | Yes |
| quantity | Integer | Positive number (> 0) | Yes |
| expiry | DateTime | Must be in the future | Yes |
| photo | File | JPG/PNG, max 5MB | No |

**Processing:**

1. Validate all input fields
2. Ensure expiry date is in future
3. If photo provided, save to `/uploads` directory
4. Create item record with status="AVAILABLE"
5. Link item to authenticated donor
6. Emit `item:new` socket event
7. Return created item

**Business Rules:**

- Only DONOR role can create items
- Expiry date must be at least 1 hour in future
- Items start with status="AVAILABLE"

---

#### FR-2.2 Photo Upload

**Description:** Enable photo attachments for food items.

**File Handling:**
| Attribute | Specification |
| ----------------- | --------------------------------------- |
| Allowed formats | image/jpeg, image/png |
| Maximum size | 5 MB |
| Storage location | `/server/uploads/` |
| Naming convention | `<timestamp>-<originalname>` |
| URL format | `/uploads/<filename>` |

---

#### FR-2.3 View My Posted Items

**Description:** Display donor's own posted items.

**Endpoint:** `GET /api/items/my-posts`

**Response Fields:**

- Item ID, name, quantity, expiry, photo URL
- Status (AVAILABLE, RESERVED, COMPLETED)
- Receiver info (if claimed)
- Created timestamp

---

### 4.4 Feature: Marketplace Dashboard (FR-3.x)

#### FR-3.1 Live Items Feed

**Description:** Display all available items in real-time.

| Attribute     | Value                                 |
| ------------- | ------------------------------------- |
| **Priority**  | High                                  |
| **Source**    | Product Owner                         |
| **Rationale** | Central hub for discovering donations |

**Endpoint:** `GET /api/items`

**Query Parameters:**
| Parameter | Type | Default | Description |
| --------- | ------ | ----------- | ------------------------------ |
| status | String | "AVAILABLE" | Filter by item status |

**Response:**

- Array of items with status="AVAILABLE"
- Ordered by createdAt descending (newest first)
- Includes donor name for each item

---

#### FR-3.2 Real-Time New Item Notification

**Description:** Push new items to all connected clients.

**Socket Event:** `item:new`

**Payload:**

```json
{
  "id": "uuid",
  "name": "Fresh Bread",
  "quantity": 10,
  "expiry": "2026-01-04T18:00:00Z",
  "photoUrl": "/uploads/bread.jpg",
  "status": "AVAILABLE",
  "donor": { "id": "uuid", "name": "Local Bakery" }
}
```

**Client Behavior:**

1. Add new item to top of feed
2. No page refresh required
3. Works across all connected browsers

---

#### FR-3.3 Real-Time Item Removal

**Description:** Remove claimed items from all dashboards instantly.

**Socket Event:** `item:claimed`

**Payload:**

```json
{
  "itemId": "uuid"
}
```

**Client Behavior:**

1. Find item by ID in local state
2. Remove from items array
3. UI updates immediately

---

### 4.5 Feature: Claim Management (FR-4.x)

#### FR-4.1 Claim Item

**Description:** Allow receivers to reserve available items.

| Attribute     | Value                        |
| ------------- | ---------------------------- |
| **Priority**  | High                         |
| **Source**    | Product Owner                |
| **Rationale** | Completes the donation cycle |

**Endpoint:** `PATCH /api/items/:id/claim`

**Authorization:** Receiver role only

**Processing:**

1. Validate user is RECEIVER role
2. Find item by ID
3. Verify item status is AVAILABLE
4. Update status to RESERVED
5. Link receiverId to item
6. Emit `item:claimed` socket event
7. Return updated item

**Error Handling:**
| Condition | Response Code | Message |
| ------------------- | ------------- | --------------------------------- |
| Item not found | 404 | "Item not found" |
| Already claimed | 400 | "Item is no longer available" |
| Wrong role | 403 | "Only receivers can claim items" |

---

#### FR-4.2 View My Claimed Items

**Description:** Display receiver's claimed items.

**Endpoint:** `GET /api/items/my-claims`

**Response:**

- Items where receiverId matches authenticated user
- Includes donor information
- Ordered by claim date descending

---

#### FR-4.3 Role-Based Claim Visibility

**Description:** Show/hide claim button based on user role.

| User Role | Claim Button | Badge Shown              |
| --------- | ------------ | ------------------------ |
| DONOR     | Hidden       | "Your Post" on own items |
| RECEIVER  | Visible      | None                     |

---

## 5. Non-Functional Requirements

### 5.1 Performance Requirements

| ID     | Requirement              | Target      | Measurement      |
| ------ | ------------------------ | ----------- | ---------------- |
| NFR-P1 | Page load time           | < 3 seconds | Lighthouse audit |
| NFR-P2 | API response time        | < 500ms     | Server logs      |
| NFR-P3 | Real-time update latency | < 2 seconds | Manual testing   |
| NFR-P4 | Concurrent users         | 50 minimum  | Load testing     |
| NFR-P5 | Database query time      | < 100ms     | Prisma logs      |

### 5.2 Reliability Requirements

| ID     | Requirement            | Target               |
| ------ | ---------------------- | -------------------- |
| NFR-R1 | System availability    | 99% uptime           |
| NFR-R2 | Data persistence       | Zero data loss       |
| NFR-R3 | Error recovery         | Graceful degradation |
| NFR-R4 | WebSocket reconnection | Automatic retry      |

### 5.3 Usability Requirements

| ID     | Requirement                  | Target                     |
| ------ | ---------------------------- | -------------------------- |
| NFR-U1 | Registration completion time | < 2 minutes                |
| NFR-U2 | Item posting time            | < 1 minute                 |
| NFR-U3 | Learning curve               | No training required       |
| NFR-U4 | Error message clarity        | Non-technical language     |
| NFR-U5 | Mobile usability             | Fully functional on 320px+ |

### 5.4 Maintainability Requirements

| ID     | Requirement      | Implementation               |
| ------ | ---------------- | ---------------------------- |
| NFR-M1 | Code modularity  | Component-based architecture |
| NFR-M2 | Documentation    | README, inline comments      |
| NFR-M3 | Version control  | Git with meaningful commits  |
| NFR-M4 | Containerization | Docker Compose setup         |

### 5.5 Scalability Requirements

| ID     | Requirement              | Target                         |
| ------ | ------------------------ | ------------------------------ |
| NFR-S1 | Horizontal scalability   | Stateless backend design       |
| NFR-S2 | Database migration path  | SQLite → PostgreSQL ready      |
| NFR-S3 | File storage abstraction | Replaceable with cloud storage |

---

## 6. External Interface Requirements

### 6.1 User Interface

#### 6.1.1 Design System

| Element       | Specification                            |
| ------------- | ---------------------------------------- |
| Color Palette | macOS-inspired grays, greens for success |
| Typography    | system-ui, -apple-system, sans-serif     |
| Border Radius | 8px for cards, 6px for buttons           |
| Shadows       | Subtle drop shadows for depth            |
| Glass Effect  | backdrop-blur for card overlays          |

#### 6.1.2 Page Specifications

| Page      | Components                       | Access         |
| --------- | -------------------------------- | -------------- |
| Home      | Hero section, value proposition  | Public         |
| Register  | Role selector, registration form | Public         |
| Login     | Email/password form              | Public         |
| Dashboard | ItemCard grid, real-time updates | Authenticated  |
| Post Item | Form with photo upload           | Donors only    |
| My Posts  | ItemCard list with status        | Donors only    |
| My Claims | ItemCard list with donor info    | Receivers only |

### 6.2 API Interface

#### 6.2.1 Base Configuration

| Attribute    | Value                           |
| ------------ | ------------------------------- |
| Base URL     | `http://localhost:3000/api`     |
| Content-Type | `application/json`              |
| Auth Header  | `Authorization: Bearer <token>` |

#### 6.2.2 Endpoints Summary

| Method | Endpoint            | Description            | Auth Required  |
| ------ | ------------------- | ---------------------- | -------------- |
| POST   | /auth/register      | Create new user        | No             |
| POST   | /auth/login         | Authenticate user      | No             |
| GET    | /auth/me            | Get current user       | Yes            |
| GET    | /items              | List available items   | Yes            |
| POST   | /items              | Create new item        | Yes (Donor)    |
| PATCH  | /items/:id/claim    | Claim an item          | Yes (Receiver) |
| PATCH  | /items/:id/cancel   | Cancel a reservation   | Yes (Receiver) |
| PATCH  | /items/:id/complete | Mark item as collected | Yes            |
| GET    | /items/my-posts     | Get donor's items      | Yes (Donor)    |
| GET    | /items/my-claims    | Get receiver's claims  | Yes (Receiver) |

### 6.3 Hardware Interfaces

No specialized hardware interfaces required. Standard web-capable devices with camera access for photo uploads.

### 6.4 Communication Interfaces

| Protocol   | Port   | Purpose                         |
| ---------- | ------ | ------------------------------- |
| HTTP/HTTPS | 80/443 | REST API communication          |
| WebSocket  | 3000   | Real-time bidirectional updates |

---

## 7. Data Requirements

### 7.1 Data Model

#### 7.1.1 User Entity

```
┌─────────────────────────────────────────┐
│                  User                    │
├─────────────────────────────────────────┤
│ id           : UUID (PK)                │
│ email        : String (Unique)          │
│ name         : String                   │
│ role         : Enum [DONOR, RECEIVER]   │
│ orgId        : String (Nullable)        │
│ phone        : String (Nullable)        │
│ address      : String (Nullable)        │
│ passwordHash : String                   │
│ createdAt    : DateTime                 │
├─────────────────────────────────────────┤
│ Relations:                              │
│   donatedItems : Item[] (as Donor)      │
│   claimedItems : Item[] (as Receiver)   │
└─────────────────────────────────────────┘
```

#### 7.1.2 Item Entity

```
┌─────────────────────────────────────────┐
│                  Item                    │
├─────────────────────────────────────────┤
│ id          : UUID (PK)                 │
│ name        : String                    │
│ quantity    : Integer                   │
│ expiry      : DateTime                  │
│ photoUrl    : String (Nullable)         │
│ status      : Enum [AVAILABLE, RESERVED,│
│               COMPLETED]                │
│ pickupNotes : String (Nullable)         │
│ collectedAt : DateTime (Nullable)       │
│ createdAt   : DateTime                  │
│ donorId     : UUID (FK → User)          │
│ receiverId  : UUID (FK → User, Nullable)│
├─────────────────────────────────────────┤
│ Relations:                              │
│   donor    : User                       │
│   receiver : User (Nullable)            │
└─────────────────────────────────────────┘
```

### 7.2 Entity Relationship Diagram

```
┌──────────────┐         ┌──────────────┐
│     User     │         │     Item     │
├──────────────┤         ├──────────────┤
│ id (PK)      │◀────────│ donorId (FK) │
│ email        │ 1    *  │ receiverId   │────────▶│ User │
│ name         │         │ name         │         │ (as  │
│ role         │         │ quantity     │         │receiver)
│ orgId        │         │ expiry       │
│ phone        │         │ photoUrl     │
│ address      │         │ status       │
│ passwordHash │         │ pickupNotes  │
│ createdAt    │         │ collectedAt  │
└──────────────┘         │ createdAt    │
                         └──────────────┘

Relationships:
- User (1) ─── donates ───▶ (0..*) Item
- User (1) ─── claims ────▶ (0..*) Item
```

### 7.3 Data Storage

| Data Type  | Storage Location    | Retention |
| ---------- | ------------------- | --------- |
| User data  | SQLite `dev.db`     | Permanent |
| Item data  | SQLite `dev.db`     | Permanent |
| Photos     | `/server/uploads/`  | Permanent |
| JWT tokens | Client localStorage | 24 hours  |

### 7.4 Data Validation Rules

| Field       | Validation Rules                            |
| ----------- | ------------------------------------------- |
| Email       | RFC 5322 format, unique per system          |
| Password    | Minimum 6 characters                        |
| Item name   | 2-200 characters, alphanumeric + spaces     |
| Quantity    | Positive integer (1-10000)                  |
| Expiry date | ISO 8601 format, must be future date        |
| Photo       | MIME type: image/jpeg or image/png, max 5MB |

---

## 8. Security Requirements

### 8.1 Authentication Security

| Requirement       | Implementation                    |
| ----------------- | --------------------------------- |
| Password Storage  | bcrypt hash with 12 salt rounds   |
| Token Type        | JWT (HS256 algorithm)             |
| Token Expiry      | 24 hours                          |
| Token Storage     | Client-side localStorage          |
| Secret Management | Environment variable `JWT_SECRET` |

### 8.2 Authorization Security

| Requirement       | Implementation                           |
| ----------------- | ---------------------------------------- |
| Role-Based Access | DONOR and RECEIVER roles enforced        |
| Route Protection  | Server-side middleware validation        |
| Action Validation | Role checked before sensitive operations |

### 8.3 Data Security

| Requirement      | Implementation                        |
| ---------------- | ------------------------------------- |
| Input Validation | Server-side validation for all inputs |
| SQL Injection    | Prisma ORM parameterized queries      |
| XSS Prevention   | React's built-in escaping             |
| File Upload      | MIME type validation, size limits     |

### 8.4 Communication Security

| Requirement | Implementation (Production)               |
| ----------- | ----------------------------------------- |
| HTTPS       | TLS 1.2+ via nginx reverse proxy          |
| CORS        | Configured allowed origins                |
| Headers     | Security headers via Helmet (recommended) |

---

## 9. Constraints and Assumptions

### 9.1 Technical Constraints

| Constraint         | Impact                                  |
| ------------------ | --------------------------------------- |
| SQLite database    | Not suitable for high concurrency       |
| Local file storage | Not suitable for distributed deployment |
| No CI/CD pipeline  | Manual deployment process               |
| No automated tests | Manual testing required                 |

### 9.2 Business Constraints

| Constraint       | Impact                                 |
| ---------------- | -------------------------------------- |
| 4-week timeline  | Limited feature scope (MVP + MRF only) |
| Small team       | Members fulfill multiple roles         |
| Academic project | Production deployment not required     |
| Zero budget      | No paid services or infrastructure     |

### 9.3 Assumptions

1. Users operate in a single timezone (no timezone conversion)
2. All users have reliable internet access
3. Photo quality is trusted (no moderation system)
4. Items are collected within reasonable timeframes
5. Single-instance deployment (no clustering)

---

## 10. Appendices

### Appendix A: Glossary

| Term           | Definition                                         |
| -------------- | -------------------------------------------------- |
| Claim          | Action of reserving an available item              |
| Dashboard      | Main view showing all available items              |
| Glass Morphism | UI design trend with translucent backgrounds       |
| Hot Reload     | Development feature for instant code updates       |
| Middleware     | Code that runs between request and response        |
| ORM            | Library that maps objects to database tables       |
| SPA            | Single Page Application with client-side routing   |
| WebSocket      | Protocol for real-time bidirectional communication |

### Appendix B: Related Documents

| Document             | Location                             |
| -------------------- | ------------------------------------ |
| Product Vision       | `core-docs/02-product-vision.md`     |
| Product Backlog      | `core-docs/03-product-backlog.md`    |
| Definition of Done   | `core-docs/04-definition-of-done.md` |
| MVP Definition       | `core-docs/05-mvp-definition.md`     |
| MRF Definition       | `core-docs/06-mrf-definition.md`     |
| Metrics & Velocity   | `core-docs/07-metrics.md`            |
| Sprint Documentation | `sprints/sprint-{1-4}/`              |
| QA Documentation     | `qa/`                                |

### Appendix C: API Response Examples

#### Successful Login Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "email": "donor@example.com",
    "name": "Local Bakery",
    "role": "DONOR"
  }
}
```

#### Item Response

```json
{
  "id": "item-uuid-here",
  "name": "Fresh Bread Loaves",
  "quantity": 15,
  "expiry": "2026-01-04T18:00:00.000Z",
  "photoUrl": "/uploads/1704312000000-bread.jpg",
  "status": "AVAILABLE",
  "createdAt": "2026-01-03T10:00:00.000Z",
  "donor": {
    "id": "donor-uuid",
    "name": "Local Bakery"
  }
}
```

---

**Document End**

_Software Requirements Specification v2.0 — EcoChain Project_  
_Last Updated: January 3, 2026_
