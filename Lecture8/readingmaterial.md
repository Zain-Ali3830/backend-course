# 

## **Lecture 8: Authentication - SignUp and Login System (Using PostgreSQL)**

---

### **📘 Topics Covered**

### 1. **Password Hashing with `bcryptjs`**

- Why plain-text passwords are insecure.
- Introduction to `bcryptjs`: a library to **hash passwords** before storing them.
- Using `bcrypt.hash()` during signup.
- Using `bcrypt.compare()` during login to verify the password.

### 2. **User Register Flow**

- Receive user data: `name`, `email`, `password`.
- Validate data (basic check or custom middleware).
- Check if the user already exists in the database.
- Hash the password using `bcryptjs`.

### 3. **Storing Hashed Passwords in PostgreSQL**

- Use a `users` table that stores the hashed password.
- No need to store plain passwords.

## What is bcrypt?

**`bcrypt`** is a **password-hashing** library.

We use it to **securely store passwords** in the database.

---

## 💡 Why do we need bcrypt?

Imagine a user signs up on your app with this info:

{ name: "Ali", email: "ali@example.com", password: "123456" }

If you **store the password directly in your database**, it can be **dangerous**:

- Anyone who hacks your database can **see all user passwords**.
- Users often **reuse passwords** on other websites, so the hacker can attack them elsewhere too.

🚨 **Storing plain text passwords is a big security risk!**

---

## ✅ Solution: Hashing with bcrypt

Instead of saving the **real password**, we **convert it into a scrambled format (hash)**.

Example:
Original Password: 123456
Hashed Password: $2b$10$S4LKut2GJQK7oJgbsKvR0eC2PfjsiHYV6J5iY7sN5UjpQ1TfheT5G

Even if a hacker steals this, they **can’t figure out the original password easily**.

---

## 🧠 What bcrypt does

### 🔁 1. Hash the password

It converts the original password into an unreadable string (called a **hash**) using a special algorithm and a "salt" (extra random string).

import bcrypt from 'bcrypt';
const saltRounds = 10;
const hashedPassword = await bcrypt.hash("123456", saltRounds);

### ✅ 2. Store the hashed password in the database

You save this **`hashedPassword`**, NOT the original password.

---

### 🔍 3. Compare during login

When the user logs in, you **don’t decrypt the stored hash** (because hashes can’t be reversed).

Instead, you hash the **entered password again** and compare it with the stored one:

const isMatch = await bcrypt.compare("123456", storedHashedPassword);

If isMatch is true, login is successful.