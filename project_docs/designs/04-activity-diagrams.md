# Activity Diagrams

**Project:** EcoChain  
**Diagram Type:** Activity  
**Version:** 2.0  
**Last Updated:** January 3, 2026

---

## 1. User Registration Activity

```mermaid
flowchart TD
    Start([Start]) --> SelectRole{Select Role}
    SelectRole -->|Donor| FillDonorForm[Fill Donor Form<br/>Email, Name, Password]
    SelectRole -->|Receiver| FillReceiverForm[Fill Receiver Form<br/>Email, Name, OrgID, Password]

    FillDonorForm --> ValidateClient{Client<br/>Validation}
    FillReceiverForm --> ValidateClient

    ValidateClient -->|Invalid| ShowError1[Show Validation Error]
    ShowError1 --> FillDonorForm

    ValidateClient -->|Valid| SubmitForm[Submit to API]
    SubmitForm --> CheckEmail{Email<br/>Exists?}

    CheckEmail -->|Yes| ShowError2[Show Duplicate Email Error]
    ShowError2 --> FillDonorForm

    CheckEmail -->|No| HashPassword[Hash Password<br/>bcrypt 10 rounds]
    HashPassword --> CreateUser[Create User Record]
    CreateUser --> SaveDB[(Save to Database)]
    SaveDB --> ShowSuccess[Show Success Message]
    ShowSuccess --> RedirectLogin[Redirect to Login]
    RedirectLogin --> End([End])
```

---

## 2. User Login Activity

```mermaid
flowchart TD
    Start([Start]) --> EnterCredentials[Enter Email & Password]
    EnterCredentials --> SubmitLogin[Submit Login Form]
    SubmitLogin --> FindUser{Find User<br/>by Email}

    FindUser -->|Not Found| ShowError1[Show Invalid Credentials]
    ShowError1 --> EnterCredentials

    FindUser -->|Found| ComparePassword{Compare<br/>Password Hash}

    ComparePassword -->|Mismatch| ShowError2[Show Invalid Credentials]
    ShowError2 --> EnterCredentials

    ComparePassword -->|Match| GenerateJWT[Generate JWT Token]
    GenerateJWT --> ReturnToken[Return Token + User]
    ReturnToken --> StoreToken[Store Token in LocalStorage]
    StoreToken --> UpdateContext[Update AuthContext]
    UpdateContext --> RedirectDashboard[Redirect to Dashboard]
    RedirectDashboard --> End([End])
```

---

## 3. Post Food Item Activity

```mermaid
flowchart TD
    Start([Start]) --> CheckAuth{User<br/>Authenticated?}
    CheckAuth -->|No| RedirectLogin[Redirect to Login]
    RedirectLogin --> End1([End])

    CheckAuth -->|Yes| CheckRole{Role =<br/>DONOR?}
    CheckRole -->|No| ShowForbidden[Show Access Denied]
    ShowForbidden --> End2([End])

    CheckRole -->|Yes| FillForm[Fill Item Form<br/>Name, Quantity, Expiry]
    FillForm --> AddPhoto{Add<br/>Photo?}

    AddPhoto -->|Yes| SelectPhoto[Select Photo File]
    SelectPhoto --> ValidatePhoto{Valid<br/>Format?}
    ValidatePhoto -->|No| ShowPhotoError[Show Format Error]
    ShowPhotoError --> SelectPhoto
    ValidatePhoto -->|Yes| ContinueSubmit[Continue]

    AddPhoto -->|No| ContinueSubmit
    ContinueSubmit --> ValidateForm{Validate<br/>Form Data}

    ValidateForm -->|Invalid| ShowFormError[Show Validation Error]
    ShowFormError --> FillForm

    ValidateForm -->|Valid| SubmitAPI[Submit to API]
    SubmitAPI --> UploadPhoto{Photo<br/>Included?}

    UploadPhoto -->|Yes| SavePhoto[Save Photo to Disk]
    SavePhoto --> CreateItem[Create Item Record]
    UploadPhoto -->|No| CreateItem

    CreateItem --> SaveDB[(Save to Database)]
    SaveDB --> EmitSocket[Emit 'item:new' Event]
    EmitSocket --> BroadcastAll[Broadcast to All Clients]
    BroadcastAll --> ShowSuccess[Show Success Message]
    ShowSuccess --> ClearForm[Clear Form]
    ClearForm --> End3([End])
```

---

## 4. Claim Item Activity

```mermaid
flowchart TD
    Start([Start]) --> ViewDashboard[View Dashboard]
    ViewDashboard --> SelectItem[Select Item to Claim]
    SelectItem --> ClickClaim[Click Claim Button]
    ClickClaim --> DisableButton[Disable Button<br/>Show Loading]
    DisableButton --> SendRequest[Send PATCH Request]

    SendRequest --> VerifyAuth{JWT<br/>Valid?}
    VerifyAuth -->|No| ShowAuthError[Show Auth Error]
    ShowAuthError --> RedirectLogin[Redirect to Login]
    RedirectLogin --> End1([End])

    VerifyAuth -->|Yes| CheckRole{Role =<br/>RECEIVER?}
    CheckRole -->|No| ShowRoleError[Show Forbidden Error]
    ShowRoleError --> EnableButton1[Enable Button]
    EnableButton1 --> End2([End])

    CheckRole -->|Yes| FindItem{Item<br/>Exists?}
    FindItem -->|No| ShowNotFound[Show Not Found Error]
    ShowNotFound --> EnableButton2[Enable Button]
    EnableButton2 --> End3([End])

    FindItem -->|Yes| CheckStatus{Status =<br/>AVAILABLE?}
    CheckStatus -->|No| ShowUnavailable[Show Already Claimed Error]
    ShowUnavailable --> RemoveFromUI[Remove from Dashboard]
    RemoveFromUI --> End4([End])

    CheckStatus -->|Yes| UpdateItem[Update Item<br/>Status = RESERVED<br/>Link Receiver]
    UpdateItem --> SaveDB[(Save to Database)]
    SaveDB --> EmitSocket[Emit 'item:claimed' Event]
    EmitSocket --> BroadcastAll[Broadcast to All Clients]
    BroadcastAll --> ShowSuccess[Show Success Toast]
    ShowSuccess --> UpdateMyClaims[Update My Claims List]
    UpdateMyClaims --> End5([End])
```

---

## 5. Real-Time Dashboard Activity

```mermaid
flowchart TD
    Start([Start]) --> Navigate[Navigate to Dashboard]
    Navigate --> FetchItems[Fetch Available Items<br/>GET /api/items]
    FetchItems --> RenderItems[Render Item Cards]
    RenderItems --> ConnectSocket[Connect to Socket.io]
    ConnectSocket --> ListenEvents[Listen for Events]

    ListenEvents --> WaitEvent{Wait for<br/>Event}

    WaitEvent -->|item:new| ReceiveNew[Receive New Item]
    ReceiveNew --> AddToState[Add Item to State]
    AddToState --> RerenderAdd[Re-render Dashboard]
    RerenderAdd --> WaitEvent

    WaitEvent -->|item:claimed| ReceiveClaimed[Receive Claimed ItemId]
    ReceiveClaimed --> RemoveFromState[Remove Item from State]
    RemoveFromState --> RerenderRemove[Re-render Dashboard]
    RerenderRemove --> WaitEvent

    WaitEvent -->|disconnect| Reconnect[Attempt Reconnection]
    Reconnect --> ConnectSocket

    WaitEvent -->|navigate away| Disconnect[Disconnect Socket]
    Disconnect --> End([End])
```

---

## 6. Complete Food Rescue Cycle

```mermaid
flowchart TD
    subgraph Donor Flow
        D1([Donor Starts]) --> D2[Login as Donor]
        D2 --> D3[Navigate to Post Item]
        D3 --> D4[Fill Item Details]
        D4 --> D5[Upload Photo]
        D5 --> D6[Submit Item]
        D6 --> D7[Item Posted Successfully]
    end

    subgraph System Flow
        S1[Item Saved to DB] --> S2[Socket Broadcasts 'item:new']
        S2 --> S3[All Dashboards Update]
    end

    subgraph Receiver Flow
        R1([Receiver Starts]) --> R2[Login as Receiver]
        R2 --> R3[View Dashboard]
        R3 --> R4[See New Item Appear]
        R4 --> R5[Click Claim Button]
        R5 --> R6[Item Claimed]
    end

    subgraph Completion
        C1[Item Status = RESERVED] --> C2[Socket Broadcasts 'item:claimed']
        C2 --> C3[Item Removed from All Dashboards]
        C3 --> C4[Receiver Sees in My Claims]
        C4 --> C5[Donor Sees in My Posts]
        C5 --> C6[Receiver Collects Item]
        C6 --> C7[Mark as Completed]
        C7 --> C8([Food Rescued!])
    end

    D7 --> S1
    S3 --> R4
    R6 --> C1
```

---

## 7. Cancel Reservation Activity

```mermaid
flowchart TD
    Start([Start]) --> ViewClaims[View My Claims Page]
    ViewClaims --> SelectItem[Select Reserved Item]
    SelectItem --> ClickCancel[Click Cancel Claim Button]
    ClickCancel --> DisableBtn[Disable Button<br/>Show Loading]
    DisableBtn --> SendRequest[Send PATCH Request]

    SendRequest --> VerifyAuth{JWT<br/>Valid?}
    VerifyAuth -->|No| AuthError[Show Auth Error]
    AuthError --> RedirectLogin[Redirect to Login]
    RedirectLogin --> End1([End])

    VerifyAuth -->|Yes| CheckOwner{User is<br/>Receiver?}
    CheckOwner -->|No| ShowForbidden[Show Forbidden Error]
    ShowForbidden --> End2([End])

    CheckOwner -->|Yes| CheckStatus{Status =<br/>RESERVED?}
    CheckStatus -->|No| ShowError[Show Status Error]
    ShowError --> End3([End])

    CheckStatus -->|Yes| UpdateItem[Update Item<br/>Status = AVAILABLE<br/>Clear ReceiverId]
    UpdateItem --> SaveDB[(Save to Database)]
    SaveDB --> EmitSocket[Emit 'item:cancelled' Event]
    EmitSocket --> BroadcastAll[Broadcast to All Clients]
    BroadcastAll --> ShowSuccess[Show Success Message]
    ShowSuccess --> RemoveFromClaims[Remove from My Claims]
    RemoveFromClaims --> AddToDashboard[Add Back to Dashboard]
    AddToDashboard --> End4([End])
```

---

## 8. Mark as Collected/Completed Activity

```mermaid
flowchart TD
    Start([Start]) --> CheckRole{User<br/>Role?}

    CheckRole -->|Donor| ViewMyPosts[View My Posts Page]
    CheckRole -->|Receiver| ViewMyClaims[View My Claims Page]

    ViewMyPosts --> SelectReservedDonor[Select Reserved Item]
    ViewMyClaims --> SelectReservedReceiver[Select Reserved Item]

    SelectReservedDonor --> ClickComplete1[Click Confirm Collection]
    SelectReservedReceiver --> ClickComplete2[Click Mark Collected]

    ClickComplete1 --> SendPatch[Send PATCH Request]
    ClickComplete2 --> SendPatch

    SendPatch --> VerifyAuth{JWT<br/>Valid?}
    VerifyAuth -->|No| AuthError[Show Auth Error]
    AuthError --> End1([End])

    VerifyAuth -->|Yes| VerifyPermission{User is Donor<br/>OR Receiver?}
    VerifyPermission -->|No| ShowForbidden[Show Forbidden Error]
    ShowForbidden --> End2([End])

    VerifyPermission -->|Yes| CheckItemStatus{Status =<br/>RESERVED?}
    CheckItemStatus -->|No| ShowError[Show Status Error]
    ShowError --> End3([End])

    CheckItemStatus -->|Yes| UpdateStatus[Update Item<br/>Status = COMPLETED<br/>Set collectedAt]
    UpdateStatus --> SaveDB[(Save to Database)]
    SaveDB --> EmitSocket[Emit 'item:completed' Event]
    EmitSocket --> ShowSuccess[Show Success Message]
    ShowSuccess --> UpdateUI[Update Item Card Status]
    UpdateUI --> End4([End])
```

---

## Activity Summary

| Activity       | Actors           | Key Decision Points                 |
| -------------- | ---------------- | ----------------------------------- |
| Registration   | User, System     | Role selection, email uniqueness    |
| Login          | User, System     | Credential validation               |
| Post Item      | Donor, System    | Photo upload, data validation       |
| Claim Item     | Receiver, System | Availability check, role validation |
| Dashboard      | User, System     | Real-time event handling            |
| Full Cycle     | All              | Complete donation workflow          |
| Cancel Claim   | Receiver, System | Ownership check, status validation  |
| Mark Completed | Donor/Receiver   | Permission check, status update     |

---

_Activity Diagrams - EcoChain Design Phase_
