

---

# 🚀 DevTinder

> Where developers don’t just swipe — they **commit**.

---



## 📛 Badges

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-fast-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-utility--first-teal?logo=tailwindcss)
![Redux Toolkit](https://img.shields.io/badge/Redux-Toolkit-purple?logo=redux)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-API-lightgrey?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 🔗 Live Demo

* **Live Application:** https://devtinder.net.in
* **Frontend Repository:** https://github.com/DhruvJain7/devTinder-ui
* **Backend Repository:** https://github.com/DhruvJain7/devTinder

---

## 📌 About the Project

**DevTinder** is a full-stack social networking platform built **exclusively for developers** to discover coding partners, mentors, collaborators, and hackathon teammates.

The interaction model is inspired by **Tinder’s swipe mechanism**, but the experience is redesigned with a **developer-first mindset**, borrowing heavily from **GitHub Dark Mode** and **VS Code aesthetics**.

Every interaction feels familiar to developers — connections are made through actions like `git commit` and rejected with `git revert`.

---

## 🎯 Project Goals

* Create a networking platform tailored specifically to developers
* Provide an intuitive swipe-based discovery experience
* Use developer-centric language and UI metaphors
* Demonstrate full-stack engineering best practices

---

## ✨ Core Features

### 🔐 Authentication

* User Signup and Login with validation
* Secure authentication using **JWT with HttpOnly cookies**
* Password hashing with **bcrypt**
* **Guest Login** functionality for recruiters and reviewers

---

### 🧑‍💻 Developer Feed

* Swipe-based stack of developer profile cards
* Displays:

  * Name
  * Tech Stack / Skills
  * Short bio
* Git-styled interaction buttons:

  * `git commit` → Interested
  * `git revert` → Ignore
* Graceful **No Users Found** empty state

---

### 🔄 Developer Interactions

* Send **Interested** or **Ignore** actions in real time
* Mutual interest results in a match
* Clean state management using Redux Toolkit

---

### 📥 Pull Requests (Request Management)

* Dedicated page for incoming connection requests
* Inspired by GitHub Pull Requests
* Actions available:

  * Accept request
  * Reject request

---

### 🤝 Connections

* View all matched developers
* Simple and readable connection list
* Expandable **Read More / Read Less** bio toggle

---

### 👤 Profile Management

* Edit personal developer profile
* Update bio, skills, and basic information
* Changes reflected instantly across the app

---

## 🎨 UI / UX Design Philosophy

DevTinder is built with strong emphasis on **developer comfort and familiarity**.

### Design Highlights

* GitHub Dark Theme–inspired color palette

  * Background: `#0D1117`
  * Cards: `#161B22`
  * Accents: `#58A6FF`, `#238636`
* Glassmorphism effects for depth
* Terminal-style widgets with typing animations
* Code-tag styled inputs (e.g. `<Email />`)
* Smooth micro-interactions powered by Framer Motion

---





* Tech Stack (detailed)
* Installation Guide (Frontend & Backend)
* API Endpoints Table
* Future Enhancements
* License


## 🧰 Tech Stack

### Frontend

* **React.js** (Vite)
* **Tailwind CSS**
* **DaisyUI**
* **Redux Toolkit**

  * Feed State
  * Connections State
  * User State
* **Framer Motion** (animations)
* **Axios** (API communication)

---

### Backend

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose** (ODM)

---

### Authentication & Security

* **JWT (JSON Web Tokens)**
* JWT stored securely using **HttpOnly Cookies**
* **bcrypt** for password hashing
* Protected routes with middleware

---

## 🏗️ Application Architecture

* **Client-side rendering** using React
* **Centralized state management** with Redux Toolkit
* RESTful API design
* Separation of concerns:

  * Controllers
  * Routes
  * Models
  * Middleware
* Scalable folder structure suitable for production use

---

## ⚙️ Installation & Setup

### 🖥️ Backend Setup

```bash
git clone <backend-repository-url>
cd backend
npm install
```

Create a `.env` file in the backend root:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend server:

```bash
npm run dev
```

Backend will run on:

```
http://localhost:5000
```

---

### 🌐 Frontend Setup

```bash
git clone <frontend-repository-url>
cd frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🔌 API Endpoints

### Authentication

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| POST   | `/auth/signup` | Register new user |
| POST   | `/auth/login`  | Login user        |
| POST   | `/auth/logout` | Logout user       |

---

### Users & Feed

| Method | Endpoint        | Description          |
| ------ | --------------- | -------------------- |
| GET    | `/user/feed`    | Fetch developer feed |
| GET    | `/profile/view` | View user profile    |
| PUT    | `/profile/edit` | Edit user profile    |

---

### Requests & Connections

| Method | Endpoint                     | Description               |
| ------ | ---------------------------- | ------------------------- |
| POST   | `/request/send/:userId`      | Send Interested / Ignore  |
| GET    | `/request/received`          | View incoming requests    |
| POST   | `/request/review/:requestId` | Accept / Reject request   |
| GET    | `/connections`               | Fetch matched connections |

---

## 🧪 Error Handling & Edge Cases

* Invalid credentials handling
* Protected route access control
* Empty states for:

  * No users in feed
  * No incoming requests
  * No connections found
* Graceful frontend error messages

---

## 🚀 Future Enhancements

* 💬 Real-time chat using WebSockets
* 🔔 Notifications system
* 🧠 AI-powered developer matching
* 🧑‍🤝‍🧑 Hackathon team creation
* 🔍 Advanced search and filters
* 📱 Mobile responsiveness improvements

---

## 🌟 Why DevTinder?

* Built **by a developer, for developers**
* Developer-friendly UI metaphors
* Clean architecture and scalable codebase
* Demonstrates real-world full-stack engineering skills
* Ideal portfolio project for modern web developers

---

## 📄 License

This project is licensed under the **MIT License**.

---

## ⭐ Support

If you found this project useful or interesting:

* Give the repository a ⭐
* Share feedback or suggestions
* Fork it and build your own version

---

> **DevTinder** — because great code deserves great collaborators. 💻❤️
