# Component Diagram

**Project:** EcoChain  
**Diagram Type:** Component  
**Version:** 1.0

---

## System Architecture

```mermaid
flowchart TB
    subgraph Client ["Client Layer (Browser)"]
        subgraph ReactApp ["React Application"]
            Pages[Pages<br/>Home, Login, Register<br/>Dashboard, PostItem<br/>MyPosts, MyClaims]
            Components[Components<br/>Navbar, ItemCard<br/>Forms, Buttons]
            Context[AuthContext<br/>User State Management]
            Services[Services<br/>API, Socket]
        end
        LocalStorage[(LocalStorage<br/>JWT Token)]
    end

    subgraph Server ["Server Layer (Node.js)"]
        subgraph Express ["Express Application"]
            Routes[Routes<br/>/api/auth/*<br/>/api/items/*]
            Controllers[Controllers<br/>authController<br/>itemController]
            Middleware[Middleware<br/>authMiddleware<br/>multer]
        end
        SocketIO[Socket.io Server<br/>Real-time Events]
        Prisma[Prisma Client<br/>ORM]
    end

    subgraph Data ["Data Layer"]
        SQLite[(SQLite Database<br/>dev.db)]
        Uploads[(File Storage<br/>/uploads)]
    end

    Pages --> Components
    Pages --> Context
    Pages --> Services
    Context --> LocalStorage
    Services -->|HTTP| Routes
    Services -->|WebSocket| SocketIO
    Routes --> Middleware
    Middleware --> Controllers
    Controllers --> Prisma
    Controllers --> SocketIO
    Prisma --> SQLite
    Middleware --> Uploads
```

---

## Component Details

### Client Layer

```mermaid
flowchart LR
    subgraph Pages
        Home[Home.jsx]
        Login[Login.jsx]
        Register[Register.jsx]
        Dashboard[Dashboard.jsx]
        PostItem[PostItem.jsx]
        MyPosts[MyPosts.jsx]
        MyClaims[MyClaims.jsx]
    end

    subgraph Components
        Navbar[Navbar.jsx]
        ItemCard[ItemCard.jsx]
        ProtectedRoute[ProtectedRoute.jsx]
    end

    subgraph Context
        AuthContext[AuthContext.jsx<br/>- user state<br/>- login/logout<br/>- token management]
    end

    subgraph Services
        API[api.js<br/>Axios instance]
        Socket[socket.js<br/>Socket.io client]
    end
```

### Server Layer

```mermaid
flowchart LR
    subgraph Routes
        AuthRoutes[authRoutes.js<br/>POST /register<br/>POST /login<br/>GET /me]
        ItemRoutes[itemRoutes.js<br/>GET /<br/>POST /<br/>PATCH /:id/claim<br/>GET /my-posts<br/>GET /my-claims]
    end

    subgraph Controllers
        AuthController[authController.js<br/>- register<br/>- login<br/>- getMe]
        ItemController[itemController.js<br/>- getItems<br/>- createItem<br/>- claimItem<br/>- getMyPosts<br/>- getMyClaims]
    end

    subgraph Middleware
        AuthMiddleware[authMiddleware.js<br/>JWT verification]
        Multer[multer config<br/>File upload handling]
    end

    AuthRoutes --> AuthController
    ItemRoutes --> ItemController
    ItemRoutes --> AuthMiddleware
    ItemRoutes --> Multer
```

---

## Deployment Architecture

### Development Mode

```mermaid
flowchart TB
    subgraph DevMachine ["Developer Machine"]
        subgraph Frontend ["Frontend Container"]
            Vite[Vite Dev Server<br/>Port 5173<br/>Hot Reload]
        end

        subgraph Backend ["Backend Container"]
            Node[Node.js<br/>Port 5000<br/>Nodemon]
            PrismaStudio[Prisma Studio<br/>Port 5555]
        end

        subgraph Storage
            DevDB[(dev.db)]
            DevUploads[(uploads/)]
        end
    end

    Browser[Browser] -->|http://localhost:5173| Vite
    Vite -->|API Proxy| Node
    Node --> DevDB
    Node --> DevUploads
```

### Production Mode (Docker)

```mermaid
flowchart TB
    subgraph DockerHost ["Docker Host"]
        subgraph ClientContainer ["client container"]
            Nginx[Nginx<br/>Static Files<br/>Reverse Proxy]
        end

        subgraph ServerContainer ["server container"]
            NodeProd[Node.js<br/>Express + Socket.io]
            PrismaProd[Prisma Client]
        end

        subgraph Volumes ["Docker Volumes"]
            ProdDB[(db-data<br/>SQLite)]
            ProdUploads[(uploads<br/>Photos)]
        end
    end

    Internet[Internet] -->|Port 3000| Nginx
    Nginx -->|/api/*| NodeProd
    Nginx -->|/socket.io| NodeProd
    NodeProd --> PrismaProd
    PrismaProd --> ProdDB
    NodeProd --> ProdUploads
```

---

## Interface Specifications

### REST API Interface

| Endpoint             | Method | Request                                  | Response      |
| -------------------- | ------ | ---------------------------------------- | ------------- |
| /api/auth/register   | POST   | {email, name, password, role, orgId?}    | {user, token} |
| /api/auth/login      | POST   | {email, password}                        | {token, user} |
| /api/auth/me         | GET    | Header: Authorization                    | {user}        |
| /api/items           | GET    | Header: Authorization                    | [{item}]      |
| /api/items           | POST   | FormData: name, quantity, expiry, photo? | {item}        |
| /api/items/:id/claim | PATCH  | Header: Authorization                    | {item}        |

### WebSocket Interface

| Event        | Direction       | Payload  | Description          |
| ------------ | --------------- | -------- | -------------------- |
| connection   | Client → Server | -        | Establish connection |
| item:new     | Server → Client | {item}   | New item posted      |
| item:claimed | Server → Client | {itemId} | Item claimed         |
| disconnect   | Client → Server | -        | Connection closed    |

---

## Dependency Graph

```mermaid
flowchart TD
    subgraph Frontend Dependencies
        React[React 18]
        Vite[Vite 5]
        Tailwind[Tailwind CSS 3]
        ReactRouter[React Router 6]
        Axios[Axios]
        SocketClient[socket.io-client 4]
    end

    subgraph Backend Dependencies
        Express[Express 4]
        PrismaLib[Prisma 5]
        SocketServer[socket.io 4]
        JWT[jsonwebtoken 9]
        Bcrypt[bcryptjs 2]
        MulterLib[multer 1]
        Cors[cors]
        Dotenv[dotenv]
    end

    React --> ReactRouter
    React --> Axios
    React --> SocketClient
    Vite --> React
    Tailwind --> Vite

    Express --> JWT
    Express --> Bcrypt
    Express --> MulterLib
    Express --> Cors
    Express --> PrismaLib
    Express --> SocketServer
```

---

_Component Diagram - EcoChain Design Phase_
