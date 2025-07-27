---

## 📌 Topics Covered

1. What is Mongoose (with analogy)
2. Designing Schema using Mongoose
3. Example: User Schema (name, email, password)
4. What is Nodemon & Why We Use It
5. Creating Controller for User Registration
6. Using Router and Route Function
7. Final Integration in `app.js`

---

## 1. 🍃 **What is Mongoose?**

> Mongoose is a library that helps you connect and work with MongoDB using JavaScript code in a clean and structured way.
> 

### 🔍 Analogy:

MongoDB stores data like this:

```json

{ "name": "Ali", "email": "ali@gmail.com" }

```

But there’s no rules — anyone can send anything!

Mongoose is like a **strict form or template**. It ensures:

- Only expected fields are saved
- Fields follow specific types (e.g. name must be a string)
- You can use mongoose when you will use mongodb database .
- We will bit touch mongoose as we will use postgres .
## 2. 🧱 **Designing Schema using Mongoose**

### 🔹 Basic Schema Structure

We define a **Schema** as a template or structure for our data.

## 🔁 **What is Nodemon and Why Use It**

> Nodemon automatically restarts your Node.js app whenever you make changes to the code.
> 

### 🧠 Why it's helpful:

- Saves time
- No need to stop/start server manually after every change

### 📦 Install Nodemon:

```bash

npm install --save-dev nodemon

```

### Update `package.json`:

```json

"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}

```