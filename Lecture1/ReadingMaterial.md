# Lecture 1 :**Introduction to Backend Development & Environment Setup**

---

## 🎯 **Learning Outcomes**

By the end of this lecture, a student will be able to:

- Understand what backend development is
- Know the purpose of Node.js in backend
- Set up their complete development environment (Node.js, npm, VS Code, Postman)
- Create and run their first basic Node.js server
- Understand what `package.json` is and why it's important

---

## 🔸 **What is Backend Development?**

### 🧠 Definition:

Backend development refers to the **server-side** part of a web application. It’s the part that:

- **Handles business logic**
- **Connects with databases**
- **Processes user requests**
- **Sends responses back to the client (frontend)**

### 📦 Example:

Imagine an **online food ordering app**:

- The **frontend** is what you see — menu, buttons, images.
- The **backend** is the part that:
    - Stores all the food data in a database.
    - Processes your order when you click “Order Now.”
    - Sends you a confirmation message.

## 🔸 **Introduction to Node.js and Its Role in Backend**

### 🚀 What is Node.js?

Node.js is a **JavaScript runtime** that lets you run JavaScript code **outside the browser** — mainly on a server.

- Built on **Chrome's V8 engine**
- Lets you use JavaScript to write backend code
- It’s fast and efficient for building scalable web apps

### 🔧 Why use Node.js for backend?

- Uses JavaScript — the language many already know
- Handles multiple user requests quickly
- Has a huge package ecosystem (`npm`)

---

## 🔸 **Installing Tools**

### 1. 🟢 Node.js

- Go to https://nodejs.org/en
- Download the **LTS version** and install
### 2. 📦 npm (Node Package Manager)

- Automatically comes with Node.js
- Used to install external libraries/packages

### 3. 📝 VS Code (Visual Studio Code)

- A free and powerful code editor
- Download from: https://code.visualstudio.com/
### 4. 📬 Postman

- Used to **test APIs** and see the response
- Download from: https://www.postman.com/


## 🔸 **Creating Your First Node.js Project**

### 👣 Step-by-step:

1. Open **VS Code**
2. Open a **new folder**
3. Open terminal in VS Code:
    
    Press `Ctrl + ~` (tilde key)
    
4. Initialize your project:
npm init -y
This will create a file called package.json 
## **Understanding `package.json`**

### 📘 What is it?

This file stores information about your project, like:

- Project name
- Version
- Dependencies (external packages)
- Start script

### 🧪 Example:

Here’s how a basic `package.json` file looks:
{
  "name": "my-first-node-app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  }
}


## **What is `http` in Node.js?**

### 🧠 Definition:

`http` is a **built-in Node.js module** that allows us to create a **basic web server**.

You don't need to install it separately — it comes **pre-installed** with Node.js.

---

## 🧩 **Why do we use the `http` module?**

Because in backend development, we need to:

- Accept **incoming requests** from the browser
- Send back appropriate **responses**
- And manage this communication using the **HTTP protocol**

The `http` module gives us tools to handle this process directly — without needing any third-party library like Express (which we’ll learn later).