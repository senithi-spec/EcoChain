# Sprint 3 Increment

**Sprint:** 3  
**Delivered:** December 25, 2025  
**Theme:** Complete Food Rescue Cycle  
**Milestone:**  **MVP COMPLETE**

---

## Increment Description

This increment completes the Minimum Viable Product by enabling receivers to claim items from the dashboard. When an item is claimed, it instantly disappears from all users' dashboards via Socket.io, and the receiver can track their claims on a dedicated page.

---

## Features Delivered

### 1. Claim Item

- Claim button on item cards (receivers only)
- API validates user role and item status
- Item status changes to "RESERVED"
- Receiver linked to item

### 2. Real-Time Removal

- Socket event `item:claimed` emitted
- Item disappears from all dashboards
- No page refresh needed

### 3. My Claims Page

- Receivers see claimed items
- Shows donor information
- Ordered by claim date

### 4. Role-Based Access

- Claim button hidden for donors
- "Your Post" badge on donor's own items
- Server rejects invalid claim attempts

---

## Technical Components

| Type     | Updates                                      |
| -------- | -------------------------------------------- |
| Backend  | `claimItem()` in itemController, PATCH route |
| Frontend | Claim button in ItemCard, MyClaims.jsx page  |
| Socket   | `item:claimed` event handling                |

---

## API Endpoints

| Method | Endpoint             | Purpose                       |
| ------ | -------------------- | ----------------------------- |
| PATCH  | /api/items/:id/claim | Claim an item (receiver only) |
| GET    | /api/items/my-claims | Get receiver's claimed items  |

---

## Socket Events

| Event        | Direction       | Payload      |
| ------------ | --------------- | ------------ |
| item:new     | Server → Client | `{ item }`   |
| item:claimed | Server → Client | `{ itemId }` |

---

## MVP Complete - Full Cycle

```
┌──────────────────────────────────────────────────────────────┐
│                    COMPLETE MVP CYCLE                         │
│                                                               │
│  ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐      │
│  │ Register│──▶│Post Item│──▶│ View on │──▶│  Claim  │      │
│  │  User   │   │ (Donor) │   │Dashboard│   │(Receiver)│      │
│  └─────────┘   └─────────┘   └─────────┘   └─────────┘      │
│       │             │             │             │            │
│       │             ▼             ▼             ▼            │
│       │        Real-time     Real-time     Real-time         │
│       │         Update        Display       Removal          │
│       ▼             │             │             │            │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                 Socket.io Real-Time                  │    │
│  └─────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
```

---

## Definition of Done Verification

| Criterion                   | Status |
| --------------------------- | ------ |
| All acceptance criteria met | ✅     |
| Works in local environment  | ✅     |
| Real-time removal works     | ✅     |
| Role-based access enforced  | ✅     |
| PO accepted                 | ✅     |
| **MVP Criteria Met**        | ✅     |

---

## Demo Scenario (Full MVP)

1. **Donor Flow:**

   - Register as Donor
   - Post item with photo
   - See item in My Posts

2. **Receiver Flow:**

   - Register as Receiver (new browser)
   - See item in Dashboard
   - Click Claim

3. **Real-Time Magic:**
   - Item disappears from Donor's dashboard
   - Item appears in Receiver's My Claims
   - All updates are instant!

---

## Increment Value

This increment completes the **core food rescue cycle**:

- Receivers can now claim items they want to pick up
- Real-time removal prevents double claims
- The full user journey from posting to claiming is functional

**MVP is DONE!** 🎉

---

_Sprint 3 Increment - EcoChain Scrum Team_
