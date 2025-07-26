# **Lecture 2: Node.js Fundamentals and Core Modules**

## 📌 Topics Covered:

- The Node.js runtime and event-driven architecture
- Synchronous vs. Asynchronous behavior
- `require`, `module.exports`, and CommonJS
- Core module: `http`
- Creating and importing custom modules

---

## 1. 🔄 **The Node.js Runtime and Event-Driven Architecture**

### 📘 What is Node.js Runtime?

Think of Node.js like a mini-programming kitchen for JavaScript. Normally, JavaScript runs inside a browser, but **Node.js allows JavaScript to run on your computer (server-side)** using a runtime engine called **V8** (the same engine used by Chrome).

### 🧠 Event-Driven Architecture (EDA)

Node.js doesn’t work like regular step-by-step programs. It works like:

> "Whenever something happens, do this."
> 

Imagine you’re a shopkeeper. You don't wait for customers at the door (blocking everything). You **set a bell**, and **when it rings**, you serve the customer. That’s how Node.js works — using **events** and **callbacks**.

### ✅ Key Idea:

Node.js listens for **events** (like file read complete, a request arrived, etc.) and executes **handlers/callbacks** when those events happen.

![eventhandler.png](attachment:a03bdfd4-0de0-4007-9a28-b9fed2820b8d:459dd770-4435-4981-a29f-b3f5c3f7518a.png)

---

## 2. 🔁 **Synchronous vs. Asynchronous Behavior**

### 🔹 Synchronous (Blocking):

Code runs **line by line**, and it **waits** for one line to finish before moving to the next.

```jsx

console.log("Start");
let data = readFileSync("file.txt");
console.log("End");

```

> Output: Start → file read (blocking) → End
>
### Asynchronous (Non-blocking):

Code moves on **without waiting**, and handles results later (like callbacks or promises).

```jsx

console.log("Start");
readFile("file.txt", (err, data) => {
  console.log("File Read Done");
});
console.log("End");

```

> Output: Start → End → File Read Done
>🧠 Why is it useful?

Asynchronous behavior helps Node.js handle **many users or tasks at the same time**, without slowing down.

![image.png](attachment:7bf1c9e2-b23b-43be-92b7-6f95e2d29a73:image.png)

## 3. 📦 **`require`, `module.exports`, and CommonJS**

### ✅ What is `require`?

It's a function used to **import** (bring in) other files or modules.

```jsx

const math = require('./math');

```

### ✅ What is `module.exports`?

It’s used to **export** (share) functions or variables from one file so another file can use them.

```jsx

// math.js
function add(a, b) {
  return a + b;
}
module.exports = { add };

### ✅ CommonJS:

Node.js uses a **module system** called **CommonJS**, where each file is its **own module**. `require()` and `module.exports` are part of this system.