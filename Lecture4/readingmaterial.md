# **Lecture 4: Advanced Express + RESTful API Design**

---

## 📌 Topics Covered:

1. What is Middleware (with real-life example)
2. Route grouping using Express Router
3. Creating controllers for separation of concerns
4. Validating request data using middleware
5. Global error handling middleware
6. Folder structure best practices

---

## 🔧 1. **What is Middleware?**

### 🧠 Definition:

> Middleware is a function that runs between the request from the user and the final response from the server.
> 

It has **access to**:

- `req` (request)
- `res` (response)
- `next()` → moves to the next middleware or route

### 🔁 Real-life Example:
Imagine you are entering a building.

1. **Security Guard checks your ID** → this is like **authentication middleware**
2. **Reception checks your appointment** → this is like **validation middleware**
3. **You are sent to the right department** → this is like **route handling**

📌 Each step is **middleware**. If one fails, the process stops and doesn’t reach the final destination.

### 🎯 Why We Use Middleware:

- Reuse logic (like checking token, validating data)
- Handle errors centrally
- Log requests, clean data, restrict access