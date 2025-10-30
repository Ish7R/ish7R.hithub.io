const http = require('http');  // This imports the http module
const fs = require('fs');
const path = require('path');


const hostname = '0.0.0.0'; // Bind to all available interfaces
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    const filePath = path.join('/Users/idamararodriguez/Desktop/TwitterBot/'+ '4-p5ss.html'); // Use relative path to the current directory
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Server Error');
        console.error('Error reading file:', err); // Log the error
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://localhost:${port}/`); // Use localhost for logging
});
