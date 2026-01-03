# EcoChain

**Local Supply Chain Food Waste Reducer**


EcoChain connects food Donors (retailers, bakeries, restaurants) with Receivers (charities, food banks) to reduce food waste through real-time food sharing.

---

##  Project Structure

```
agile_cw/
├── ecochain/                      # Application source code
│   ├── client/                    # React frontend
│   └── server/                    # Express backend
│
├── project_docs/                  # Project documentation
│   ├── agile/                     # Agile/Scrum documentation
│   │   ├── core-docs/             # SRS, backlog, vision, etc.
│   │   ├── sprints/               # Per-sprint docs
│   │   └── qa/                    # Test plans & bug reports
│   └── ecochain_implementation.md
│
└── README.md                      # This file
```

---

## Quick Start

### Option 1: Docker (Recommended) 

The easiest way to run EcoChain - no manual setup required!

#### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) & [Docker Compose](https://docs.docker.com/compose/install/)

#### Production Mode

```bash
# Clone the repository
git clone <repository-url>
cd ecochain

# Build and start all services
docker-compose up --build

# Or run in detached mode
docker-compose up -d --build
```

Access the app at: `http://localhost:3000`

#### Development Mode (with Hot Reload)

```bash
# Start with hot reload for development
docker-compose -f docker-compose.dev.yml up --build
```

Access the app at: `http://localhost:5173`

#### Docker Commands

```bash
# Stop all containers
docker-compose down

# View logs
docker-compose logs -f

# Rebuild specific service
docker-compose up --build server
docker-compose up --build client

# Remove volumes (reset database)
docker-compose down -v
```

---

### Option 2: Manual Setup

#### Prerequisites

- Node.js v18+
- npm or yarn

#### 1. Install Backend Dependencies

```bash
cd server
npm install
```

### 2. Setup Database

```bash
cd server
npx prisma db push
```

### 3. Start Backend Server

```bash
cd server
npm run dev
```

Server runs at: `http://localhost:5000`

### 4. Install Frontend Dependencies

```bash
cd client
npm install
```

### 5. Start Frontend

```bash
cd client
npm run dev
```

App runs at: `http://localhost:5173`

---

##  Tech Stack

| Layer    | Technology                   |
| -------- | ---------------------------- |
| Frontend | React 18, Vite, Tailwind CSS |
| Backend  | Express.js, Socket.io        |
| Database | SQLite + Prisma ORM          |
| Auth     | JWT + bcrypt                 |
| DevOps   | Docker, Docker Compose       |

---

##  Features

- **User Registration** — Donors & Receivers with role-based access
- **Item Posting** — Photos, quantities, expiry dates, pickup instructions
- **Real-Time Dashboard** — Socket.io live updates
- **Instant Claiming** — First-come-first-served system
- **Cancel Reservation** — Receivers can release claimed items
- **Mark as Collected** — Both parties can confirm pickup
- **Status Tracking** — Available → Reserved → Completed
- **Contact Details** — Phone numbers and collection addresses

---

##  Documentation

| Document            | Location                                                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Agile Index**     | [project_docs/agile/00-index.md](project_docs/agile/00-index.md)                                                                                 |
| **SRS**             | [project_docs/agile/core-docs/01-software-requirements-specification.md](project_docs/agile/core-docs/01-software-requirements-specification.md) |
| **Product Backlog** | [project_docs/agile/core-docs/03-product-backlog.md](project_docs/agile/core-docs/03-product-backlog.md)                                         |
| **Start Guide**     | [project_docs/start_instructions.md](project_docs/start_instructions.md)                                                                       |
| **Build Guide**     | [ECOCHAIN_BUILD_GUIDE.md](ECOCHAIN_BUILD_GUIDE.md)                                                                     |
| **App README**      | [ecochain/README.md](ecochain/README.md)                                                                                                         |

---

##  Project Metrics

| Metric            | Value        |
| ----------------- | ------------ |
| Sprints Completed | 5/5          |
| Story Points      | 96/96 (100%) |
| User Stories      | 28           |
| Test Pass Rate    | 100%         |

---

##  API Endpoints

| Method | Endpoint                  | Description              |
| ------ | ------------------------- | ------------------------ |
| POST   | `/api/auth/register`      | Register user            |
| POST   | `/api/auth/login`         | Login                    |
| GET    | `/api/auth/me`            | Get current user         |
| GET    | `/api/items`              | List available items     |
| POST   | `/api/items`              | Post item (Donor)        |
| PATCH  | `/api/items/:id/claim`    | Claim item (Receiver)    |
| PATCH  | `/api/items/:id/cancel`   | Cancel reservation       |
| PATCH  | `/api/items/:id/complete` | Mark as collected        |
| GET    | `/api/items/my-posts`     | Get donor's items        |
| GET    | `/api/items/my-claims`    | Get receiver's claims    |

---

##  Timeline

- **Sprint 1** (Dec 5-11): Authentication
- **Sprint 2** (Dec 12-18): Posting & Dashboard
- **Sprint 3** (Dec 19-25): Claim System (MVP)
- **Sprint 4** (Dec 26-Jan 1): UI/UX & Docker
- **Sprint 5** (Jan 2-3): Collection Workflow Enhancement

---

##  Test Credentials

**Password for all accounts:** `password123`

### Donors:
| Email | Name |
|-------|------|
| keells@ecochain.lk | Keells Super - Colombo 7 |
| peaborey@ecochain.lk | Perera & Sons Bakery |
| shanmugas@ecochain.lk | Shanmugas Restaurant |

### Receivers:
| Email | Name |
|-------|------|
| sarvodaya@ecochain.lk | Sarvodaya Shramadana Movement |
| elders@ecochain.lk | Colombo Elders Home |
| helpage@ecochain.lk | HelpAge Sri Lanka |


---

## Testing Checklist

- [ ] Donor can register with business name
- [ ] Receiver can register with Org ID
- [ ] Duplicate email shows error
- [ ] Donor can post item with photo
- [ ] Expiry date validation works
- [ ] Dashboard shows items in real-time
- [ ] Receiver can claim an item
- [ ] Claimed item disappears from all dashboards

_EcoChain — Reducing food waste, one donation at a time._
