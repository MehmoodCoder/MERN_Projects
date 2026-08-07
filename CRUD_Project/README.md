# MERN Stack CRUD Application

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application designed for complete user management (Create, Read, Update, Delete) with real-time UI synchronization and production-ready serverless deployment on Vercel.

---

## 🚀 Features

* **Create User:** Add new users with input validation (Name, Email, Age).
* **Read Users:** Fetch and display all stored records from MongoDB Atlas instantly.
* **Update User:** Pre-populate existing user data into form fields for inline modification.
* **Delete User:** Remove records dynamically and trigger real-time UI re-rendering.
* **Responsive UI:** Dark-themed responsive layout built with Bootstrap 5.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, React Router DOM, Axios, Bootstrap 5
* **Backend:** Node.js, Express.js, CORS, Dotenv, Nodemon
* **Database:** MongoDB Atlas (Mongoose ODM)
* **Deployment:** Vercel (Frontend & Serverless Functions)
* **Version Control:** Git, GitHub

---

## ✨ Features

- 🏗️ **Full-Stack MERN Architecture** – Seamless integration connecting a React client to a Node.js & Express REST API server.
- ⚡ **Axios API Integration** – Clean client-side HTTP requests utilizing relative paths for real-time frontend-backend communication.
- 🔄 **Real-Time CRUD Operations** – Instant UI updates and state re-rendering on User Creation, Retrieval, Updates, and Deletions.
- 🗄️ **MongoDB & Mongoose Validation** – Structured database schemas, data validation, and persistent cloud storage using MongoDB Atlas.
- 🌐 **Dynamic Client-Side Routing** – Multi-page navigation managed via React Router for viewing, adding, and updating users.
- 🎨 **Responsive UI Layer** – Dynamic, modern dark-themed views and responsive form interfaces styled with Bootstrap 5.
- 🚀 **Serverless Production Deployment** – Production-ready setup with custom `vercel.json` rewrite rules and serverless function routing.
- ⚙️ **Centralized Environment Vault** – Secure management of sensitive configurations (`MONGO_URL`, `PORT`) via `.env` integration.
- ⚡ **Developer Workflow** – Accelerated development loop using Vite on the frontend and hot-reloading tooling on the backend.

---

## 📂 Project Directory Structure

**Generated:** 8/7/2026, 10:11:07 PM
**Root Path:** `workspace\MERN_Projects`

```
├── 📁 CRUD_Project
│   ├── 📁 backend
│   │   ├── 📁 controllers
│   │   │   └── 📄 static.js
│   │   ├── 📁 models
│   │   │   └── 📄 user.js
│   │   ├── 📁 routes
│   │   │   └── 📄 static.js
│   │   ├── 📄 app.js
│   │   ├── 📄 connection.js
│   │   ├── ⚙️ package-lock.json
│   │   └── ⚙️ package.json
│   ├── 📁 frontend
│   │   ├── 📁 public
│   │   │   ├── 🖼️ favicon.svg
│   │   │   └── 🖼️ icons.svg
│   │   ├── 📁 src
│   │   │   ├── 📁 components
│   │   │   │   ├── 📄 CreateUser.jsx
│   │   │   │   ├── 📄 UpdateUser.jsx
│   │   │   │   └── 📄 User.jsx
│   │   │   ├── 🎨 App.css
│   │   │   ├── 📄 App.jsx
│   │   │   ├── 🎨 index.css
│   │   │   └── 📄 main.jsx
│   │   ├── ⚙️ .oxlintrc.json
│   │   ├── 🌐 index.html
│   │   ├── ⚙️ package-lock.json
│   │   ├── ⚙️ package.json
│   │   └── 📄 vite.config.js
│   ├── 📝 README.md
│   └── ⚙️ vercel.json
└── 📝 README.md
```

---

## 💡 Core Concepts Covered

- ✅ **MERN Stack Architecture** – Integrating a React SPA frontend with a Node.js & Express RESTful API backend
- ✅ **RESTful API Design** – Building structured HTTP routes (`GET`, `POST`, `PUT`, `DELETE`) for seamless CRUD handling
- ✅ **React State & Effect Hooks** – Managing dynamic client-side state (`useState`) and side effects (`useEffect`) for real-time UI sync
- ✅ **Axios HTTP Client** – Asynchronous API requests, payload handling, and relative URL path configurations
- ✅ **Client-Side Routing** – Managing view transitions and dynamic parameter routes (`req.params`) using React Router DOM
- ✅ **MongoDB & Mongoose Modeling** – Designing database schemas, defining constraints, and performing asynchronous query execution
- ✅ **Express Middleware Pipeline** – Configuring cross-origin resource sharing (`cors`), body parsing (`express.json`), and modular route routing
- ✅ **Serverless Deployment Architecture** – Routing API traffic and configuring rewrites for cloud platforms via `vercel.json`
- ✅ **Environment Vault Management** – Securing database credentials (`MONGO_URL`) and server environments with `dotenv`
- ✅ **Modern Build Tooling** – Leveraging Vite for fast frontend bundle generation and module bundling

---

## 👤 Author

**MehmoodCoder**

- 🔗 GitHub: [https://github.com/MehmoodCoder](https://github.com/MehmoodCoder)
- 🌐 Portfolio: [My Portfolio Link](https://mh56-portfolio.vercel.app)

---

## 📄 License

This project is open source and available under the **MIT License**.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 Changelog

### v1.0.0 (Initial Release)
- ✨ **Full-Stack MERN Integration:** Connected React frontend with Express/Node.js backend and MongoDB Atlas using Mongoose ODM.
- ⚡ **Axios API Integration:** Configured Axios relative routing (`/api`) across all React components (`User`, `CreateUser`, `UpdateUser`) for seamless client-server interaction.
- 🔄 **Real-time CRUD Synchronization:** Implemented dynamic state updates on Create, Read, Update, and Delete operations to re-render UI instantly.
- 🛠️ **Serverless Deployment Setup:** Configured `vercel.json` rewrite rules and exported Express server instance as serverless functions for production deployment.
- 🎨 **Responsive UI Layer:** Designed clean, dark-themed responsive table and form layouts utilizing Bootstrap 

---

### ***Happy coding without chai ! ☕***
