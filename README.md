# EcoChain: Waste-to-Value Platform ♻️

![Project Status](https://img.shields.io/badge/Status-Prototype-orange)
![License](https://img.shields.io/badge/License-MIT-green)
![Tech Stack](https://img.shields.io/badge/Stack-MERN-blue)

> **Digital platform to track, segregate & convert waste into value, connecting households, agencies & recyclers for a circular economy.**

## 📖 Overview
EcoChain is a web-based platform designed to reduce food waste in local supply chains. It connects **Food Donors** (retailers, restaurants) with **Receivers** (charities, food banks) to facilitate the redistribution of surplus food before it expires.

The project follows **Agile Scrum** methodology, with full documentation available in the `project_docs` directory.

## ✨ Key Features
* **Real-Time Marketplace:** Live feed of available food donations.
* **Role-Based Access:** Distinct interfaces for Donors and Receivers.
* **Inventory Management:** Easy posting system for donors with expiration tracking.
* **Claim System:** Instant reservation mechanism for receivers to claim items.
* **Waste Tracking:** Analytics to monitor food saved from landfills.

## 🛠️ Tech Stack
* **Frontend:** React.js, Vite, Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** SQLite (Dev), PostgreSQL (Prod), Prisma ORM
* **DevOps:** Docker, Docker Compose

## 📂 Project Structure

```text
agile_cw/
├── ecochain/                  # Application source code
│   ├── client/                # React frontend
│   └── server/                # Express backend
│
├── project_docs/              # Project documentation
│   ├── agile/                 # Agile/Scrum documentation
│   │   ├── core-docs/         # SRS, backlog, vision, etc.
│   │   ├── sprints/           # Per-sprint docs
│   │   └── qa/                # Test plans & bug reports
│   └── ecochain_imp...        # Implementation details
│
└── README.md                  # This file
