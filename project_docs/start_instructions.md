#  EcoChain - How to Run the Project

## Prerequisites (Install These First)

### 1. Install Git

1. Go to: https://git-scm.com/downloads
2. Download for Windows and run the installer
3. Click "Next" for everything (default settings are fine)

### 2. Install Node.js

1. Go to: https://nodejs.org/
2. Download the **LTS** version (green button)
3. Run the installer, click "Next" for everything
4. Restart your computer after installing

### 3. Install VS Code (Optional but Recommended)

1. Go to: https://code.visualstudio.com/
2. Download and install

---

## Clone the Project

### Step 1: Open Terminal

- Press `Win + R`, type `cmd`, press Enter

### Step 2: Go to D: Drive

```bash
d:
```

### Step 3: Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/agile_cw.git agile_cw
```

⚠️ Replace `YOUR_USERNAME` with the actual GitHub username

⏳ Wait for download to complete

### Step 4: Verify

```bash
cd agile_cw
dir
```

✅ You should see folders like `ecochain`, `project_docs`, etc.

---

## Running the Project

### Step 1: Open Terminal

- **Windows:** Press `Win + R`, type `cmd`, press Enter
- **Or in VS Code:** Press `` Ctrl + ` `` (backtick key)

### Step 2: Navigate to Project Folder

```bash
cd D:\agile_cw\ecochain
```

### Step 3: Set Up the Backend (Server)

```bash
cd server
```

```bash
npm install
```

⏳ Wait for it to finish (may take 1-2 minutes)

```bash
npx prisma db push
```

```bash
node prisma/seed.js
```

✅ You should see "Seed completed successfully!"

```bash
npm run dev
```

✅ You should see "Server running on port 5000"

**⚠️ Keep this terminal open!**

---

### Step 4: Set Up the Frontend (Client)

**Open a NEW terminal** (don't close the first one!)

```bash
cd D:\agile_cw\ecochain\client
```

```bash
npm install
```

⏳ Wait for it to finish

```bash
npm run dev
```

✅ You should see a URL like `http://localhost:5173`

---

### Step 5: Open the App

1. Open your web browser (Chrome, Firefox, Edge)
2. Go to: **http://localhost:5173**
3. 🎉 You should see the EcoChain homepage!

---

## Test Login Credentials

**Password for all accounts:** `password123`

### Donor Accounts (Can post food items):

- `keells@ecochain.lk`
- `peaborey@ecochain.lk`
- `shanmugas@ecochain.lk`

### Receiver Accounts (Can claim food items):

- `sarvodaya@ecochain.lk`
- `elders@ecochain.lk`
- `helpage@ecochain.lk`

---

## How to Stop the App

1. Go to each terminal
2. Press `Ctrl + C`
3. Type `Y` if asked to confirm

---

## How to Start Again Later

**Terminal 1 (Server):**

```bash
cd D:\agile_cw\ecochain\server
npm run dev
```

**Terminal 2 (Client):**

```bash
cd D:\agile_cw\ecochain\client
npm run dev
```

Then open http://localhost:5173 in your browser.

---

## Common Problems

### ❌ "npm is not recognized"

→ Node.js is not installed. Go back to Prerequisites.

### ❌ "Port 5000 already in use"

→ Close other terminals and try again, or restart your computer.

### ❌ "Cannot connect to server"

→ Make sure the backend terminal shows "Server running on port 5000"

### ❌ Page is blank or shows error

→ Make sure BOTH terminals are running (server AND client)

---

## Quick Reference

| What             | Command               | Where                    |
| ---------------- | --------------------- | ------------------------ |
| Start Server     | `npm run dev`         | `ecochain/server` folder |
| Start Client     | `npm run dev`         | `ecochain/client` folder |
| Reset Database   | `node prisma/seed.js` | `ecochain/server` folder |
| Install packages | `npm install`         | Either folder            |

---

**Need help?** Make sure both terminals show no errors and both are running!
