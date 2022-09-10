const http = require('http');  
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; 
  res.setHeader('Content-Type', 'text/plain'); 
  res.end('<h1>Hello Node!!!!</h1>\n');  
});

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}/`);
});