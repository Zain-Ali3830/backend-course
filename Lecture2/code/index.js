import http from 'http'
const {add} = require('./math.js');

const server = http.createServer((req, res) => {
  res.write("Hello from Node.js Server!");
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

console.log('Sum is',add(5, 3));