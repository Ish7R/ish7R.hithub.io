//line 11 path to served file JS/P5/PY you're serving on the localhost. Remember to turn off the Firewall under settings 
http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'http://0.0.0.0.'; // Bind to all available interfaces
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    const filePath = path.join('/Users/idamararodriguez/Desktop/TwitterBot/' + '4p5ss.html'); // Path to your HTML file
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Server Error');
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
  console.log(`Server running at http://${hostname}:${port}/`);
});
