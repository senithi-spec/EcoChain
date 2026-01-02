# Bug Reports

**Project:** EcoChain  
**Version:** 1.0  
**Created:** December 5, 2025  
**Last Updated:** January 2, 2026

---

## Bug Report Format

Each bug report includes:

- **ID:** BUG-XXX
- **Title:** Brief description
- **Severity:** Critical / High / Medium / Low
- **Status:** Open / In Progress / Fixed / Closed / Won't Fix
- **Sprint Found:** When discovered
- **Sprint Fixed:** When resolved

---

## BUG-001: SQLite Enum Not Supported

| Field            | Value                                  |
| ---------------- | -------------------------------------- |
| **ID**           | BUG-001                                |
| **Title**        | Prisma enums fail with SQLite database |
| **Severity**     | High                                   |
| **Status**       | ✅ Closed                              |
| **Sprint Found** | Sprint 1                               |
| **Sprint Fixed** | Sprint 1                               |
| **Reported By**  | Dev Team                               |
| **Assigned To**  | Dev Team                               |

### Description

When running `prisma db push` with enum types (Role, ItemStatus), the command fails with error: "The current connector does not support enums."

### Steps to Reproduce

1. Define Prisma schema with `enum Role { DONOR RECEIVER }`
2. Set datasource provider to "sqlite"
3. Run `npx prisma db push`
4. Observe error

### Expected Behavior

Enums should work with SQLite or provide clear error during schema definition.

### Actual Behavior

```
Error: P1012
The current connector does not support enums.
```

### Environment

- Prisma: v5.0.0
- SQLite: v3
- OS: Windows 10

### Root Cause

SQLite does not support native enum types. Prisma requires enums to be converted to String fields when using SQLite.

### Resolution

Changed enum fields to String type with comments documenting valid values:

```prisma
// Changed from: role Role
role String // "DONOR" or "RECEIVER"
```

### Verification

- [x] `prisma db push` succeeds
- [x] Registration works with string roles
- [x] Role-based logic works correctly

---

## BUG-002: Socket Connection Drops Silently

| Field            | Value                                           |
| ---------------- | ----------------------------------------------- |
| **ID**           | BUG-002                                         |
| **Title**        | Socket.io connection drops without reconnection |
| **Severity**     | Medium                                          |
| **Status**       | ✅ Closed                                       |
| **Sprint Found** | Sprint 2                                        |
| **Sprint Fixed** | Sprint 2                                        |
| **Reported By**  | Dev Team                                        |
| **Assigned To**  | Dev Team                                        |

### Description

After browser tab is inactive for a few minutes, Socket.io connection drops and real-time updates stop working. No automatic reconnection occurs.

### Steps to Reproduce

1. Login and open dashboard
2. Leave tab inactive for 5 minutes
3. In another tab, post new item
4. Return to original tab
5. New item doesn't appear

### Expected Behavior

Socket should automatically reconnect when connection drops.

### Actual Behavior

Connection drops silently, no reconnection attempt.

### Root Cause

Default Socket.io client config doesn't handle browser tab suspension well.

### Resolution

Added reconnection logic to socket service:

```javascript
const socket = io(SOCKET_URL, {
  autoConnect: true,
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});
```

### Verification

- [x] Socket reconnects after tab becomes active
- [x] Real-time updates resume after reconnection

---

## BUG-003: Claim Button Active During API Call

| Field            | Value                                           |
| ---------------- | ----------------------------------------------- |
| **ID**           | BUG-003                                         |
| **Title**        | Double-click on Claim causes duplicate requests |
| **Severity**     | Medium                                          |
| **Status**       | ✅ Closed                                       |
| **Sprint Found** | Sprint 3                                        |
| **Sprint Fixed** | Sprint 4                                        |
| **Reported By**  | Dev Team                                        |
| **Assigned To**  | Dev Team                                        |

### Description

Rapidly clicking the "Claim" button sends multiple API requests before the first one completes, causing race conditions.

### Steps to Reproduce

1. Open dashboard as receiver
2. Find available item
3. Rapidly double-click "Claim" button
4. Observe network tab

### Expected Behavior

Only one API request should be sent; button should be disabled during processing.

### Actual Behavior

Multiple PATCH requests sent to `/api/items/:id/claim`.

### Root Cause

No loading state or button disable during API call.

### Resolution

Added loading state to Claim button:

```jsx
const [claiming, setClaiming] = useState(false);

const handleClaim = async () => {
  setClaiming(true);
  try {
    await api.patch(`/items/${id}/claim`);
  } finally {
    setClaiming(false);
  }
};

<button disabled={claiming}>{claiming ? "Claiming..." : "Claim"}</button>;
```

### Verification

- [x] Button disabled during API call
- [x] Only one request sent on double-click
- [x] Loading text shows during claim

---

## BUG-004: Photo Not Displayed for Items

| Field            | Value                                      |
| ---------------- | ------------------------------------------ |
| **ID**           | BUG-004                                    |
| **Title**        | Item photos return 404 in production build |
| **Severity**     | High                                       |
| **Status**       | ✅ Closed                                  |
| **Sprint Found** | Sprint 2                                   |
| **Sprint Fixed** | Sprint 2                                   |
| **Reported By**  | Dev Team                                   |
| **Assigned To**  | Dev Team                                   |

### Description

Photos uploaded for items display broken image icon. Network tab shows 404 for photo URLs.

### Steps to Reproduce

1. Post item with photo
2. Navigate to dashboard
3. Observe item card
4. Photo shows broken image

### Expected Behavior

Photo should display correctly in item card.

### Actual Behavior

404 error when fetching `/uploads/filename.jpg`.

### Root Cause

Express static file serving not configured correctly. Missing:

```javascript
app.use("/uploads", express.static("uploads"));
```

### Resolution

Added static file middleware in server/index.js:

```javascript
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
```

### Verification

- [x] Photos display correctly
- [x] No 404 errors in network tab
- [x] Works for all image types (JPG, PNG)

---

## BUG-005: Empty Dashboard on First Load

| Field            | Value                                                 |
| ---------------- | ----------------------------------------------------- |
| **ID**           | BUG-005                                               |
| **Title**        | Dashboard shows empty on first load, works on refresh |
| **Severity**     | Medium                                                |
| **Status**       | ✅ Closed                                             |
| **Sprint Found** | Sprint 2                                              |
| **Sprint Fixed** | Sprint 2                                              |
| **Reported By**  | Dev Team                                              |
| **Assigned To**  | Dev Team                                              |

### Description

When navigating to Dashboard for the first time, no items are displayed. After refreshing the page, items appear correctly.

### Steps to Reproduce

1. Login as any user
2. Navigate to Dashboard
3. Observe empty state
4. Refresh page
5. Items now appear

### Expected Behavior

Items should load on first navigation.

### Actual Behavior

Items only load after page refresh.

### Root Cause

useEffect for fetching items had incorrect dependency array.

### Resolution

Fixed useEffect dependencies:

```jsx
useEffect(() => {
  fetchItems();
}, []); // Correct: empty array for mount-only
```

Also ensured fetchItems is defined correctly outside useEffect.

### Verification

- [x] Items load on first navigation
- [x] No duplicate fetches
- [x] Works consistently

---

## BUG-006: Vite Not Accessible in Docker

| Field            | Value                                                  |
| ---------------- | ------------------------------------------------------ |
| **ID**           | BUG-006                                                |
| **Title**        | Frontend dev server not accessible from host in Docker |
| **Severity**     | Medium                                                 |
| **Status**       | ✅ Closed                                              |
| **Sprint Found** | Sprint 4                                               |
| **Sprint Fixed** | Sprint 4                                               |
| **Reported By**  | Dev Team                                               |
| **Assigned To**  | Dev Team                                               |

### Description

When running frontend in Docker container, localhost:5173 is not accessible from the host machine.

### Steps to Reproduce

1. Run `docker-compose -f docker-compose.dev.yml up`
2. Open http://localhost:5173 in browser
3. Connection refused

### Expected Behavior

Vite dev server should be accessible from host.

### Actual Behavior

Connection refused on localhost:5173.

### Root Cause

Vite binds to 127.0.0.1 by default, which is not accessible from outside container.

### Resolution

Added host configuration to vite.config.js:

```javascript
server: {
  port: 5173,
  host: true, // Bind to 0.0.0.0
}
```

### Verification

- [x] Vite accessible from host machine
- [x] Hot reload works
- [x] No CORS issues

---

## BUG-007: JWT Expiry Not Handled

| Field            | Value                              |
| ---------------- | ---------------------------------- |
| **ID**           | BUG-007                            |
| **Title**        | Expired JWT causes silent failures |
| **Severity**     | Medium                             |
| **Status**       | ✅ Closed                          |
| **Sprint Found** | Sprint 3                           |
| **Sprint Fixed** | Sprint 4                           |
| **Reported By**  | Dev Team                           |
| **Assigned To**  | Dev Team                           |

### Description

When JWT token expires, API calls fail silently and user remains on protected pages without feedback.

### Steps to Reproduce

1. Login to application
2. Wait for token to expire (or manually expire)
3. Try to post item or claim
4. Operation fails with no user feedback

### Expected Behavior

User should be redirected to login with message about session expiry.

### Actual Behavior

API returns 401, but no UI feedback or redirect.

### Root Cause

No axios interceptor handling 401 responses globally.

### Resolution

Added axios response interceptor:

```javascript
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
```

### Verification

- [x] 401 redirects to login
- [x] Token cleared on redirect
- [x] Works for all API calls

---

## Bug Summary by Sprint

| Sprint    | Found | Fixed | Carry Over |
| --------- | ----- | ----- | ---------- |
| Sprint 1  | 1     | 1     | 0          |
| Sprint 2  | 3     | 3     | 0          |
| Sprint 3  | 2     | 1     | 1          |
| Sprint 4  | 1     | 2     | 0          |
| **Total** | **7** | **7** | **0**      |

## Bug Summary by Severity

| Severity  | Total | Fixed | Open  |
| --------- | ----- | ----- | ----- |
| Critical  | 0     | 0     | 0     |
| High      | 2     | 2     | 0     |
| Medium    | 5     | 5     | 0     |
| Low       | 0     | 0     | 0     |
| **Total** | **7** | **7** | **0** |

---

## Lessons Learned

1. **SQLite Limitations:** Always check database provider limitations before using Prisma features
2. **Real-time Testing:** Test Socket.io with multiple browser windows early
3. **Loading States:** Add loading states to all buttons that trigger API calls
4. **Docker Networking:** Test container networking early in development
5. **Token Management:** Implement global error handling for auth failures

---

_Bug Reports maintained by the EcoChain QA Team_
