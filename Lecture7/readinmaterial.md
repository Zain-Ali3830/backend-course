Lecture 6: Node.js with PostgreSQL (pg module)
🎯 Lecture Goals
By the end of this lecture, students should be able to:

Establish a connection between Node.js and PostgreSQL

Run SQL queries directly from Node.js

Organize database logic using helper functions

Understand and handle asynchronous database operations properly

🧠 Before We Begin:
👉 What is pg?
It is a PostgreSQL client for Node.js.

Allows us to interact with PostgreSQL databases from our backend code.

 Install it using:
npm install pg


🔒 What is dotenv and Why Do We Use It?
✅ Definition:
dotenv is a Node.js package that lets you store secret values (like passwords, API keys, database URLs) in a separate file called .env instead of writing them directly in your code.

🔍 Why do we use dotenv?
🚫 Problem Without .env:
Imagine you connect to your database like this:

js
Copy
Edit
const pool = new Pool({
  user: "postgres",
  password: "2267",     // ❌ Hardcoded sensitive info
  host: "localhost",
  database: "backend",
});
This password is visible in your code.

If you upload your project to GitHub, everyone can see it.

It's risky and bad practice for security.

✅ Solution With dotenv:
You create a .env file like this:

ini
Copy
Edit
PASSWORD=2267
Then in your code:

js
Copy
Edit
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
  user: "postgres",
  password: process.env.PASSWORD,  // ✅ Now safe
  host: "localhost",
  database: "backend",
});
Now:

The password is hidden from the code.

You can add .env to .gitignore so it’s never uploaded.

You can change the value without editing your code.

📦 How to Use dotenv in Steps
1. Install the package:
npm install dotenv
2. Create a .env file in your root directory:
PASSWORD=2267
PORT=5000
3. Load .env values in your code:
import dotenv from 'dotenv';
dotenv.config(); // Always put this at the top

console.log(process.env.PASSWORD); // Output: 2267

