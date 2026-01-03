# Use Case Diagram

**Project:** EcoChain  
**Diagram Type:** Use Case  
**Version:** 1.0

---

## System Actors

| Actor        | Description                                             |
| ------------ | ------------------------------------------------------- |
| **Donor**    | Food retailers, bakeries, restaurants with surplus food |
| **Receiver** | Charities, food banks, community organizations          |
| **System**   | EcoChain platform (automated processes)                 |

---

## Use Case Diagram

```mermaid
graph TB
    subgraph EcoChain System
        UC1[Register Account]
        UC2[Login]
        UC3[Logout]
        UC4[Post Food Item]
        UC5[Upload Photo]
        UC6[View Dashboard]
        UC7[Claim Item]
        UC8[View My Posts]
        UC9[View My Claims]
        UC10[Real-time Updates]
        UC11[Validate Credentials]
        UC12[Hash Password]
        UC13[Generate JWT]
        UC14[Broadcast Events]
    end

    Donor((Donor))
    Receiver((Receiver))
    System((System))

    Donor --> UC1
    Donor --> UC2
    Donor --> UC3
    Donor --> UC4
    Donor --> UC5
    Donor --> UC6
    Donor --> UC8

    Receiver --> UC1
    Receiver --> UC2
    Receiver --> UC3
    Receiver --> UC6
    Receiver --> UC7
    Receiver --> UC9

    UC4 -.->|includes| UC5
    UC2 -.->|includes| UC11
    UC1 -.->|includes| UC12
    UC2 -.->|includes| UC13
    UC7 -.->|includes| UC14
    UC4 -.->|includes| UC14

    System --> UC10
    System --> UC14
```

---

## Use Case Descriptions

### UC1: Register Account

| Field             | Description                                                                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Actor**         | Donor, Receiver                                                                                                                                       |
| **Precondition**  | User has valid email                                                                                                                                  |
| **Main Flow**     | 1. User selects role (Donor/Receiver)<br>2. User enters email, name, password<br>3. Receiver enters Org ID<br>4. System validates and creates account |
| **Postcondition** | Account created, user can login                                                                                                                       |
| **Extensions**    | Email already exists → Show error                                                                                                                     |

---

### UC2: Login

| Field             | Description                                                                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Actor**         | Donor, Receiver                                                                                                                          |
| **Precondition**  | User has registered account                                                                                                              |
| **Main Flow**     | 1. User enters email and password<br>2. System validates credentials<br>3. System generates JWT token<br>4. User redirected to dashboard |
| **Postcondition** | User authenticated, session active                                                                                                       |
| **Extensions**    | Invalid credentials → Show error                                                                                                         |

---

### UC4: Post Food Item

| Field             | Description                                                                                                                                                                             |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Actor**         | Donor                                                                                                                                                                                   |
| **Precondition**  | User logged in as Donor                                                                                                                                                                 |
| **Main Flow**     | 1. Donor enters item name, quantity, expiry<br>2. Donor optionally uploads photo<br>3. System validates data<br>4. System saves item to database<br>5. System broadcasts to all clients |
| **Postcondition** | Item visible on all dashboards                                                                                                                                                          |
| **Extensions**    | Invalid expiry date → Show error                                                                                                                                                        |

---

### UC7: Claim Item

| Field             | Description                                                                                                                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Actor**         | Receiver                                                                                                                                                                                            |
| **Precondition**  | User logged in as Receiver, item available                                                                                                                                                          |
| **Main Flow**     | 1. Receiver clicks Claim button<br>2. System validates item is available<br>3. System updates status to RESERVED<br>4. System links receiver to item<br>5. System broadcasts removal to all clients |
| **Postcondition** | Item claimed, removed from dashboards                                                                                                                                                               |
| **Extensions**    | Item already claimed → Show error                                                                                                                                                                   |

---

### UC6: View Dashboard

| Field             | Description                                                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Actor**         | Donor, Receiver                                                                                                                                               |
| **Precondition**  | User logged in                                                                                                                                                |
| **Main Flow**     | 1. User navigates to dashboard<br>2. System fetches available items<br>3. System establishes WebSocket connection<br>4. Dashboard displays items in real-time |
| **Postcondition** | User sees live feed of items                                                                                                                                  |

---

## Actor-Use Case Matrix

| Use Case          | Donor | Receiver | System |
| ----------------- | :---: | :------: | :----: |
| Register Account  |   ✓   |    ✓     |        |
| Login             |   ✓   |    ✓     |        |
| Logout            |   ✓   |    ✓     |        |
| Post Food Item    |   ✓   |          |        |
| Upload Photo      |   ✓   |          |        |
| View Dashboard    |   ✓   |    ✓     |        |
| Claim Item        |       |    ✓     |        |
| View My Posts     |   ✓   |          |        |
| View My Claims    |       |    ✓     |        |
| Real-time Updates |       |          |   ✓    |
| Broadcast Events  |       |          |   ✓    |

---

_Use Case Diagram - EcoChain Design Phase_
