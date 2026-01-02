# MRF (Minimum Releasable Features) Definition

**Project:** EcoChain  
**Version:** 1.0  
**Created:** December 5, 2025  
**Last Updated:** January 2, 2026

---

## MRF Overview

MRF (Minimum Releasable Features) represents the features delivered **after MVP** that make the product polished, production-ready, and suitable for release. While MVP proves the concept works, MRF ensures it works **well**.

```
MVP (Sprints 1-3)          MRF (Sprint 4 + Buffer)
┌─────────────────┐        ┌─────────────────────┐
│ Core Cycle      │   ──►  │ Polish & Production │
│ - Auth          │        │ - UI Enhancements   │
│ - Post          │        │ - Error Handling    │
│ - Dashboard     │        │ - Docker Support    │
│ - Claim         │        │ - Documentation     │
└─────────────────┘        └─────────────────────┘
```

---

## MRF Feature List

### MRF-1: UI/UX Enhancements

| Feature               | Description                                       | Sprint   |
| --------------------- | ------------------------------------------------- | -------- |
| macOS-Inspired Design | Glass morphism, custom shadows, modern aesthetics | Sprint 4 |
| Card-Based Layout     | Consistent card components across all views       | Sprint 4 |
| Loading States        | Spinners and skeleton loaders                     | Sprint 4 |
| Empty States          | Friendly messages when no data available          | Sprint 4 |
| Responsive Design     | Mobile-first, works on all screen sizes           | Sprint 4 |

**Implementation Details:**

- Tailwind CSS custom theme with macOS color palette
- Glass effect using backdrop-blur
- Custom button styles (`.btn-macos`)
- Card component with hover effects

---

### MRF-2: Error Handling & Validation

| Feature             | Description                                | Sprint   |
| ------------------- | ------------------------------------------ | -------- |
| Form Validation     | Client-side validation with clear messages | Sprint 4 |
| API Error Handling  | Graceful handling of network/server errors | Sprint 4 |
| Toast Notifications | Success/error feedback to users            | Sprint 4 |
| 404 Page            | Friendly not-found page                    | Buffer   |
| Session Expiry      | Handle expired JWT gracefully              | Sprint 4 |

**Implementation Details:**

- Try-catch blocks in all async operations
- Axios interceptors for global error handling
- User-friendly error messages (no technical jargon)

---

### MRF-3: DevOps & Deployment

| Feature            | Description                          | Sprint   |
| ------------------ | ------------------------------------ | -------- |
| Docker Support     | Containerized backend and frontend   | Sprint 4 |
| Docker Compose     | One-command startup for entire stack | Sprint 4 |
| Development Mode   | Hot reload support in containers     | Sprint 4 |
| Production Build   | Optimized nginx-served frontend      | Buffer   |
| Environment Config | Proper .env file management          | Sprint 4 |

**Implementation Details:**

- Dockerfile for server (Node.js)
- Dockerfile for client (Vite dev / nginx prod)
- docker-compose.yml for production
- docker-compose.dev.yml for development

---

### MRF-4: Documentation

| Feature             | Description                 | Sprint   |
| ------------------- | --------------------------- | -------- |
| README.md           | Complete setup instructions | Sprint 4 |
| API Documentation   | Endpoint reference          | Sprint 4 |
| Code Comments       | Inline documentation        | Ongoing  |
| Agile Documentation | Full Scrum artifacts        | Buffer   |
| Testing Checklist   | QA verification guide       | Buffer   |

---

### MRF-5: Role-Based Access Control

| Feature           | Description                        | Sprint         |
| ----------------- | ---------------------------------- | -------------- |
| Protected Routes  | Auth-required pages                | Sprint 1 (MVP) |
| Role-Based UI     | Different views for Donor/Receiver | Sprint 2 (MVP) |
| Role-Based API    | Endpoint restrictions by role      | Sprint 3 (MVP) |
| Middleware Guards | Server-side role validation        | Sprint 3 (MVP) |

**Note:** RBAC was implemented as part of MVP but refined in later sprints.

---

### MRF-6: Data Integrity & Security

| Feature            | Description                 | Sprint         |
| ------------------ | --------------------------- | -------------- |
| Password Hashing   | bcrypt with 10 salt rounds  | Sprint 1 (MVP) |
| JWT Security       | 7-day expiry, secure secret | Sprint 1 (MVP) |
| Input Sanitization | Prevent XSS/injection       | Sprint 4       |
| File Validation    | Image type and size limits  | Sprint 2 (MVP) |
| CORS Configuration | Proper origin restrictions  | Sprint 4       |

---

## MRF vs MVP Comparison

| Aspect            | MVP                        | MRF                         |
| ----------------- | -------------------------- | --------------------------- |
| **Goal**          | Prove concept works        | Make it production-ready    |
| **UI**            | Functional, basic styling  | Polished, consistent design |
| **Errors**        | Console logs, basic alerts | User-friendly messages      |
| **Deployment**    | Manual npm commands        | Docker one-command setup    |
| **Documentation** | Basic README               | Complete Agile artifacts    |
| **Testing**       | Manual testing             | Documented test cases       |

---

## MRF Acceptance Criteria

### UI/UX

- [ ] All pages follow macOS-inspired design language
- [ ] Cards have consistent styling across views
- [ ] Loading states prevent user confusion
- [ ] Empty states guide users to next action
- [ ] Works on mobile (320px) to desktop (1920px)

### Error Handling

- [ ] Invalid form inputs show inline errors
- [ ] API failures show toast notifications
- [ ] Network errors have retry guidance
- [ ] Session expiry redirects to login

### DevOps

- [ ] `docker-compose up` starts entire stack
- [ ] Development mode has hot reload
- [ ] Production mode serves optimized build
- [ ] No manual database setup required

### Documentation

- [ ] README covers all setup scenarios
- [ ] API endpoints are documented
- [ ] Agile artifacts are complete

---

## MRF Timeline

| Period                    | Focus        | Deliverables                            |
| ------------------------- | ------------ | --------------------------------------- |
| Sprint 4 (Dec 26 - Jan 1) | Polish       | UI enhancements, Docker, Error handling |
| Buffer (Jan 2-5)          | Finalization | Documentation, Final testing, Bug fixes |

---

## Future Backlog (Post-MRF)

Features identified for future releases:

| Feature             | Priority | Notes                         |
| ------------------- | -------- | ----------------------------- |
| QR Verification     | High     | Digital handover verification |
| Admin Dashboard     | High     | User management, analytics    |
| Email Notifications | Medium   | Claim confirmations           |
| Dietary Filters     | Medium   | Vegan, Gluten-Free tags       |
| Search & Filter     | Medium   | By location, category, expiry |
| Push Notifications  | Low      | Mobile app feature            |
| Analytics Dashboard | Low      | Impact metrics                |

---

_MRF defined by the EcoChain Product Owner after MVP completion_
