# EcoChain MVP Build Guide

---

## Project Overview

**EcoChain** connects food **Donors** (retailers, bakeries, restaurants) with **Receivers** (charities, food banks) to reduce food waste. The MVP enables one complete "Food Rescue" cycle:

1. User registers as Donor or Receiver
2. Donor posts surplus food items
3. Receivers view live dashboard of available items
4. Receiver claims an item (removes from feed)

---

## Tech Stack

| Component   | Technology   | Version |
| ----------- | ------------ | ------- |
| Runtime     | Node.js      | v18+    |
| Frontend    | React.js     | v18+    |
| Styling     | Tailwind CSS | v3+     |
| Backend     | Express.js   | v4+     |
| Database    | SQLite       | v3      |
| ORM         | Prisma       | v5+     |
| Real-time   | Socket.io    | v4+     |
| Auth        | JWT + bcrypt | -       |
| File Upload | Multer       | v1+     |

---

## Project Structure

```
ecochain/
├── client/                     # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ItemCard.jsx
│   │   │   ├── ItemForm.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── PostItem.jsx
│   │   ├── services/
│   │   │   ├── api.js          # Axios instance
│   │   │   └── socket.js       # Socket.io client
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── App.jsx
│   │   ├── index.jsx
│   │   └── index.css           # Tailwind imports
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── server/                     # Express backend
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── dev.db              # SQLite database file (auto-generated)
│   ├── routes/
│   │   ├── auth.js
│   │   └── items.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── itemController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── uploads/                # Local photo storage
│   ├── utils/
│   │   └── socket.js
│   ├── index.js                # Entry point
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## Database Schema (Prisma)

Create `server/prisma/schema.prisma`:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

model User {
  id           String   @id @default(uuid())
  email        String   @unique
  name         String
  role         Role
  orgId        String?  // Only for Receivers
  passwordHash String
  createdAt    DateTime @default(now())

  // Relations
  donatedItems Item[]   @relation("DonorItems")
  claimedItems Item[]   @relation("ReceiverItems")
}

enum Role {
  DONOR
  RECEIVER
}

model Item {
  id         String     @id @default(uuid())
  name       String
  quantity   Int
  expiry     DateTime
  photoUrl   String?
  status     ItemStatus @default(AVAILABLE)
  createdAt  DateTime   @default(now())

  // Relations
  donor      User       @relation("DonorItems", fields: [donorId], references: [id])
  donorId    String
  receiver   User?      @relation("ReceiverItems", fields: [receiverId], references: [id])
  receiverId String?
}

enum ItemStatus {
  AVAILABLE
  RESERVED
  COMPLETED
}
```

---

## API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint    | Description       | Body                                      | Auth |
| ------ | ----------- | ----------------- | ----------------------------------------- | ---- |
| POST   | `/register` | Register new user | `{ email, name, role, orgId?, password }` | No   |
| POST   | `/login`    | Login user        | `{ email, password }`                     | No   |
| GET    | `/me`       | Get current user  | -                                         | Yes  |

### Item Routes (`/api/items`)

| Method | Endpoint     | Description                   | Body                                 | Auth |
| ------ | ------------ | ----------------------------- | ------------------------------------ | ---- |
| GET    | `/`          | Get all available items       | -                                    | Yes  |
| POST   | `/`          | Create new item (Donor only)  | `{ name, quantity, expiry }` + photo | Yes  |
| PATCH  | `/:id/claim` | Claim an item (Receiver only) | -                                    | Yes  |
| GET    | `/my-posts`  | Get donor's posted items      | -                                    | Yes  |
| GET    | `/my-claims` | Get receiver's claimed items  | -                                    | Yes  |

---

## User Stories to Implement

Map each feature to its Jira ticket:

| Ticket | Feature                               | Priority | Story Points |
| ------ | ------------------------------------- | -------- | ------------ |
| PJM-1  | Donor registration with business name | High     | 3            |
| PJM-2  | Receiver registration with Org ID     | High     | 3            |
| PJM-3  | Item posting form (Name, Qty, Expiry) | High     | 5            |
| PJM-4  | Photo upload for items                | Medium   | 5            |
| PJM-7  | Claim button functionality            | High     | 8            |

---

## Implementation Steps

### Step 1: Initialize Backend

```bash
mkdir -p ecochain/server && cd ecochain/server
npm init -y
npm install express cors dotenv bcryptjs jsonwebtoken prisma @prisma/client multer socket.io
npm install -D nodemon
npx prisma init --datasource-provider sqlite
```

Update `package.json` scripts:

```json
{
  "scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js",
    "db:push": "prisma db push",
    "db:studio": "prisma studio"
  }
}
```

### Step 2: Initialize Frontend

```bash
cd .. && npm create vite@latest client -- --template react
cd client
npm install
npm install axios socket.io-client react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure `tailwind.config.js`:

```js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

Add to `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 3: Build Authentication (PJM-1, PJM-2)

**Backend:**

- Create `authController.js` with `register` and `login` functions
- Hash passwords with bcrypt (10 rounds)
- Generate JWT on login (expires in 7 days)
- Validate: email must be unique, all fields required
- If role is RECEIVER, require orgId field

**Frontend:**

- Create `Register.jsx` page with role toggle (Donor/Receiver)
- Show "Business Name" field for Donor, "Organization ID" for Receiver
- Create `Login.jsx` page
- Store JWT in localStorage
- Create `AuthContext` to manage auth state globally

### Step 4: Build Item Posting (PJM-3, PJM-4)

**Backend:**

- Configure Multer for `/uploads` folder
- Accept JPG/PNG only, max 5MB
- `POST /api/items` creates item linked to donor
- Validate: expiry date must be in the future
- Emit socket event `item:new` after creation

**Frontend:**

- Create `PostItem.jsx` page (Donor only)
- Form fields: Name (text), Quantity (number), Expiry (date), Photo (file)
- Client-side validation before submit
- Redirect to dashboard after success

### Step 5: Build Live Dashboard (MRF 3)

**Backend:**

- `GET /api/items` returns items where `status = AVAILABLE`
- Order by `createdAt` descending (newest first)
- Include donor name in response

**Frontend:**

- Create `Dashboard.jsx` page
- Display items as cards (ItemCard component)
- Connect to Socket.io
- Listen for `item:new` → add to list
- Listen for `item:claimed` → remove from list
- Show "Claim" button only for Receivers

### Step 6: Build Claim Functionality (PJM-7)

**Backend:**

- `PATCH /api/items/:id/claim`
- Verify user is a Receiver
- Verify item status is AVAILABLE
- Update status to RESERVED, set receiverId
- Emit socket event `item:claimed` with item ID

**Frontend:**

- "Claim" button on ItemCard
- On click: call API, show success message
- Socket listener removes item from all users' dashboards

---

## Socket.io Events

| Event          | Direction       | Payload      | Trigger         |
| -------------- | --------------- | ------------ | --------------- |
| `item:new`     | Server → Client | `{ item }`   | New item posted |
| `item:claimed` | Server → Client | `{ itemId }` | Item claimed    |

---

## Environment Variables

**Server `.env`:**

```env
PORT=5000
JWT_SECRET=your-super-secret-key-change-in-production
```

**Client `.env`:**

```env
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

---

## Git Workflow

Follow feature branch workflow per the project document:

1. `main` branch is protected
2. Create feature branch: `git checkout -b feature/PJM-1-user-registration`
3. Make commits with ticket reference: `git commit -m "PJM-1: Add donor registration form"`
4. Push and create Pull Request
5. Merge to main after review

---

## Validation Rules Summary

| Field              | Rule                                         |
| ------------------ | -------------------------------------------- |
| Email              | Required, must be unique, valid email format |
| Password           | Required, minimum 6 characters               |
| Name/Business Name | Required                                     |
| Org ID             | Required only if role is RECEIVER            |
| Item Name          | Required                                     |
| Quantity           | Required, positive integer                   |
| Expiry             | Required, must be future date                |
| Photo              | Optional, JPG/PNG only, max 5MB              |

---

## Run the Project

**Terminal 1 (Backend):**

```bash
cd server
npx prisma db push
npm run dev
```

**Terminal 2 (Frontend):**

```bash
cd client
npm run dev
```

Access at: `http://localhost:5173`

---

## Testing Checklist

- [ ] Donor can register with business name
- [ ] Receiver can register with Org ID
- [ ] Duplicate email shows error
- [ ] Login returns JWT token
- [ ] Donor can post item with all fields
- [ ] Expiry date validation works (no past dates)
- [ ] Photo upload works (JPG/PNG, <5MB)
- [ ] Dashboard shows available items in real-time
- [ ] Receiver can claim an item
- [ ] Claimed item disappears from all dashboards
- [ ] Donor cannot see "Claim" button
