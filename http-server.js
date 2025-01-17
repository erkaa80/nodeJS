const http = require("http");

const port = 8000;

const server = http.createServer((request, response) => {
  response.status = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("Hello World");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
