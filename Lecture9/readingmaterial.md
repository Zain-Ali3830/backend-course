# **Lecture 9: Authentication with JWT (JSON Web Tokens)**

---

## 🔸 **What is JWT (JSON Web Token)?**

**JWT** is a method to securely transmit data (like user identity) between two parties (client and server) as a **token**.

### 🧠 Simple Definition:

> A JWT is a digital ID card that your server gives to a user when they log in. The user shows it every time they access protected routes (like a dashboard).
> 

---

## 🔸 **Why JWT is used?**

- ✅ To **verify** a user without storing session on the server.
- ✅ To **protect routes** (only logged-in users can access certain pages).
- ✅ JWT is **stateless**, meaning server doesn’t need to remember users — just verifies token.

---

## 🔸 **Real-life Analogy:**

Imagine entering a concert:

1. You show your **ticket** at the gate (like your JWT).
2. Security checks if it’s **valid** (token verification).
3. If valid, you enter; otherwise, access is denied.