# Lecture 3:  **Express.js Basics – Routes, Parameters & HTTP Methods**

## 📌 Topics Covered:

- Installing and setting up Express
- Understanding HTTP Methods: GET, POST, PUT, PATCH, DELETE
- Creating basic routes in Express
- Handling Query Parameters and Route Parameters
- Express project structure (best practices)

---

## 1. ⚙️ **Installing and Setting Up Express**

### 📘 What is Express?

Express is a **framework built on top of Node.js** that makes it easy to handle routes, APIs, and web apps. Think of it like a **helper tool** that makes server development **simpler and faster**.

### 🧱 Steps to Install:

1. Initialize your Node project:

```bash

npm init -y

```

1. Install Express:
npm install express

## 2. 🌐 **Understanding HTTP Methods**

### 📘 What are HTTP Methods?

HTTP methods are **ways of sending requests** to the server. Each method has a different purpose:

| Method | Purpose | Example Use Case |
| --- | --- | --- |
| GET | Read data | Get a list of users |
| POST | Send (create) new data | Add a new user |
| PUT | Update entire data | Replace a user’s full info |
| PATCH | Update partial data | Change only the email |
| DELETE | Remove data | Delete a user by ID |