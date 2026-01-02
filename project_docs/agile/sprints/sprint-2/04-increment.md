# Sprint 2 Increment

**Sprint:** 2  
**Delivered:** December 18, 2025  
**Theme:** Core Marketplace Functionality

---

## Increment Description

Building on the authentication foundation, this increment delivers the core donor workflow and the central marketplace experience. Donors can post surplus food items with photos, and all users see a real-time dashboard that updates instantly when new items are added.

---

## Features Delivered

### 1. Item Posting

- Form with name, quantity, and expiry date
- Validation: all fields required, future expiry date
- Item linked to donor's user ID
- Status set to "AVAILABLE"

### 2. Photo Upload

- Optional photo attachment (JPG/PNG)
- Max file size: 5MB
- Photos stored in `/uploads` folder
- Preview before upload

### 3. My Posts Page

- Donors see their posted items
- Status badges (Available, Reserved)
- Ordered by creation date

### 4. Live Dashboard

- Displays all available items
- Card layout with item details
- Shows donor name on each card
- Items ordered newest first

### 5. Real-Time New Items

- Socket.io integration
- New items appear without refresh
- Works across multiple browser tabs
- Reconnection on connection drop

---

## Technical Components

| Type     | Files Created                                                  |
| -------- | -------------------------------------------------------------- |
| Backend  | `itemController.js`, `items.js` (routes), Multer config        |
| Frontend | `PostItem.jsx`, `Dashboard.jsx`, `MyPosts.jsx`, `ItemCard.jsx` |
| Services | `socket.js` (client), Socket.io server setup                   |
| Database | `Item` model added to `schema.prisma`                          |

---

## API Endpoints

| Method | Endpoint            | Purpose                      |
| ------ | ------------------- | ---------------------------- |
| GET    | /api/items          | Get all available items      |
| POST   | /api/items          | Create new item (with photo) |
| GET    | /api/items/my-posts | Get donor's posted items     |

---

## Socket Events

| Event    | Direction       | Payload    |
| -------- | --------------- | ---------- |
| item:new | Server → Client | `{ item }` |

---

## Increment Build

```
Increment 1 (Auth)
      │
      ▼
┌─────────────────────────────────────────────┐
│            Increment 2                       │
│  ┌───────────┐  ┌──────────┐  ┌──────────┐  │
│  │ Post Item │  │Dashboard │  │ Real-Time│  │
│  │   Form    │──│   Feed   │──│  Updates │  │
│  └───────────┘  └──────────┘  └──────────┘  │
└─────────────────────────────────────────────┘
```

---

## Definition of Done Verification

| Criterion                     | Status |
| ----------------------------- | ------ |
| Code implemented and compiles | ✅     |
| Works in local environment    | ✅     |
| Real-time tested across tabs  | ✅     |
| Photo upload works            | ✅     |
| PO accepted                   | ✅     |

---

## Demo Scenario

1. Login as Donor
2. Navigate to Post Item
3. Fill form, upload photo → Success
4. Open second browser tab with Dashboard
5. Post another item in first tab
6. Item appears instantly in second tab 🎉

---

## Increment Value

This increment provides the **core marketplace functionality**:

- Donors can now share surplus food with the community
- Real-time visibility creates urgency and engagement
- Photo uploads build trust in food quality

---

_Sprint 2 Increment - EcoChain Scrum Team_
