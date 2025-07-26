import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

//  **Creating Routes with Each Method in Express**

// ?Before writing any code, understand this:

// ?- `app.get()` means: **When someone sends a GET request to a route, do this**
// ?- `req` is the request object (incoming data)
// ?- `res` is the response object (outgoing data)

app.get('/hello', (req, res) => {
  res.send("Hello, world!");
});


app.use(express.json()); // middleware to read JSON body
//We will discuss about midleware in detail

app.post('/user', (req, res) => {
  const userData = req.body;
  res.send(`User ${userData.name} added!`);
});


app.put('/user/:id', (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;
  res.send(`User ${userId} updated with name: ${updatedData.name}`);
});


app.patch('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ${userId} partially updated`);
});



app.delete('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ${userId} deleted`);
});


// **🧠 Let’s Understand: Query vs Route Parameters

//?🔹 Query Parameters (After `?`)

// ?They are used to **send optional information** in the URL.
// !Example
// ?  /greet?name=Ali&age=20

app.get('/greet', (req, res) => {
  const name = req.query.name;
  const age = req.query.age;
  res.send(`Hello ${name}, you are ${age} years old`);
});


// Hello Ali, you are 20 years old


// * Route Parameters (Dynamic URLs)

// ?Used when the **URL has a changing part** like user ID.

// ! Example:
//!  /user/5

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is ${userId}`);
});

// ?User ID is 5