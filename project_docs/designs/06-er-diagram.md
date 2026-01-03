# Entity-Relationship Diagram

**Project:** EcoChain  
**Diagram Type:** ER (Entity-Relationship)  
**Version:** 2.0  
**Last Updated:** January 3, 2026

---

## Database Schema Overview

```mermaid
erDiagram
    USER ||--o{ ITEM_DONATED : "donates"
    USER ||--o{ ITEM_CLAIMED : "claims"

    USER {
        string id PK "UUID"
        string email UK
        string name
        string passwordHash
        string role "DONOR or RECEIVER"
        string orgId "nullable"
        string phone "nullable - Contact number"
        string address "nullable - Collection location"
        datetime createdAt
    }

    ITEM_DONATED {
        string id PK "UUID"
        string name
        int quantity
        datetime expiry
        string photoUrl "nullable"
        string status "AVAILABLE, RESERVED, COMPLETED"
        string pickupNotes "nullable - Collection instructions"
        datetime collectedAt "nullable - When collected"
        string donorId FK
        string receiverId FK "nullable"
        datetime createdAt
    }

    ITEM_CLAIMED {
        string id PK "UUID"
        string receiverId FK
    }
```

---

## Detailed Entity Definitions

### USER Entity

```mermaid
erDiagram
    USER {
        string id PK "UUID auto-generated"
        string email UK "Unique email address"
        string name "Display name"
        string passwordHash "Bcrypt hashed password"
        string role "DONOR or RECEIVER"
        string orgId "Optional: Organization ID"
        string phone "Optional: Contact phone number"
        string address "Optional: Collection location"
        datetime createdAt "Record creation timestamp"
    }
```

| Attribute    | Type     | Constraints      | Description                             |
| ------------ | -------- | ---------------- | --------------------------------------- |
| id           | String   | PK, UUID         | Unique user identifier                  |
| email        | String   | Unique, Not Null | User login email                        |
| name         | String   | Not Null         | User display name                       |
| passwordHash | String   | Not Null         | Bcrypt hashed (10 rounds)               |
| role         | String   | Not Null         | "DONOR" or "RECEIVER"                   |
| orgId        | String   | Nullable         | Organization identifier (for receivers) |
| phone        | String   | Nullable         | Contact phone number                    |
| address      | String   | Nullable         | Collection/pickup location (for donors) |
| createdAt    | DateTime | Default: now()   | Creation timestamp                      |

---

### ITEM Entity

```mermaid
erDiagram
    ITEM {
        string id PK "UUID auto-generated"
        string name "Food item name"
        int quantity "Number of units"
        datetime expiry "Expiration date/time"
        string photoUrl "Optional photo path"
        string status "AVAILABLE, RESERVED, COMPLETED"
        string pickupNotes "Optional: Collection instructions"
        datetime collectedAt "Optional: When collected"
        string donorId FK "References User(id)"
        string receiverId FK "References User(id), nullable"
        datetime createdAt "Record creation timestamp"
    }
```

| Attribute   | Type     | Constraints            | Description                       |
| ----------- | -------- | ---------------------- | --------------------------------- |
| id          | String   | PK, UUID               | Unique item identifier            |
| name        | String   | Not Null               | Name of food item                 |
| quantity    | Int      | Not Null               | Quantity available                |
| expiry      | DateTime | Not Null               | Item expiration date              |
| photoUrl    | String   | Nullable               | Path to uploaded photo            |
| status      | String   | Default: "AVAILABLE"   | Current item status               |
| pickupNotes | String   | Nullable               | Collection/pickup instructions    |
| collectedAt | DateTime | Nullable               | Timestamp when item was collected |
| donorId     | String   | FK → User.id, Not Null | Donor who posted                  |
| receiverId  | String   | FK → User.id, Nullable | Receiver who claimed              |
| createdAt   | DateTime | Default: now()         | Creation timestamp                |

---

## Relationships

### One-to-Many: User → Items (as Donor)

```mermaid
erDiagram
    USER ||--o{ ITEM : "donates"
    USER {
        string id PK
        string name
        string role
    }
    ITEM {
        string id PK
        string name
        string donorId FK
    }
```

- **Cardinality:** 1:N (One User can donate Many Items)
- **Participation:** Partial (A User may have 0 donated items)
- **FK:** `Item.donorId` → `User.id`

---

### One-to-Many: User → Items (as Receiver)

```mermaid
erDiagram
    USER ||--o{ ITEM : "claims"
    USER {
        string id PK
        string name
        string role
    }
    ITEM {
        string id PK
        string name
        string receiverId FK
    }
```

- **Cardinality:** 1:N (One User can claim Many Items)
- **Participation:** Partial (A User may have 0 claimed items)
- **FK:** `Item.receiverId` → `User.id`

---

## Complete Database Schema

```mermaid
erDiagram
    USER ||--o{ ITEM : "donorId"
    USER ||--o{ ITEM : "receiverId"

    USER {
        string id PK
        string email UK
        string name
        string passwordHash
        string role
        string orgId
        string phone
        string address
        datetime createdAt
    }

    ITEM {
        string id PK
        string name
        int quantity
        datetime expiry
        string photoUrl
        string status
        string pickupNotes
        datetime collectedAt
        string donorId FK
        string receiverId FK
        datetime createdAt
    }
```

---

## Prisma Schema Reference

```prisma
// User model
model User {
  id           String   @id @default(uuid())
  email        String   @unique
  name         String
  role         String   // "DONOR" or "RECEIVER"
  orgId        String?  // Only for Receivers
  phone        String?  // Contact phone number
  address      String?  // Collection location (for donors)
  passwordHash String
  createdAt    DateTime @default(now())

  // Relations
  donatedItems Item[]   @relation("DonorItems")
  claimedItems Item[]   @relation("ReceiverItems")
}

// Item model
model Item {
  id          String    @id @default(uuid())
  name        String
  quantity    Int
  expiry      DateTime
  photoUrl    String?
  status      String    @default("AVAILABLE") // "AVAILABLE", "RESERVED", "COMPLETED"
  pickupNotes String?   // Collection instructions
  collectedAt DateTime? // When actually collected
  createdAt   DateTime  @default(now())

  // Relations
  donor      User     @relation("DonorItems", fields: [donorId], references: [id])
  donorId    String
  receiver   User?    @relation("ReceiverItems", fields: [receiverId], references: [id])
  receiverId String?
}
```

---

## Data Dictionary

### Value Constraints

| Field       | Valid Values                         | Description             |
| ----------- | ------------------------------------ | ----------------------- |
| User.role   | "DONOR", "RECEIVER"                  | User role in the system |
| Item.status | "AVAILABLE", "RESERVED", "COMPLETED" | Item lifecycle status   |

> **Note:** The system uses String fields with application-level validation rather than database-level enums for flexibility.

### Indexes

| Table | Column(s)  | Type    | Purpose                      |
| ----- | ---------- | ------- | ---------------------------- |
| User  | id         | Primary | Record identification (UUID) |
| User  | email      | Unique  | Fast login lookup            |
| Item  | id         | Primary | Record identification (UUID) |
| Item  | donorId    | Foreign | Join with User               |
| Item  | receiverId | Foreign | Join with User               |

### Constraints

| Constraint       | Table | Rule                                      |
| ---------------- | ----- | ----------------------------------------- |
| FK_Item_Donor    | Item  | donorId REFERENCES User(id)               |
| FK_Item_Receiver | Item  | receiverId REFERENCES User(id) (nullable) |
| App_Role         | User  | role validated at application level       |
| App_Status       | Item  | status validated at application level     |

---

_Entity-Relationship Diagram - EcoChain Design Phase_
