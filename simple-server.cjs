const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = './dist' + (req.url === '/' ? '/index.html' : req.url);
  
  // Handle routes
  if (req.url.startsWith('/for-advertisers')) {
    filePath = './dist/_worker.js'; // Will serve the main app
  }
  
  const extname = path.extname(filePath);
  let contentType = 'text/html';
  
  switch (extname) {
    case '.js': contentType = 'text/javascript'; break;
    case '.css': contentType = 'text/css'; break;
    case '.json': contentType = 'application/json'; break;
    case '.png': contentType = 'image/png'; break;
    case '.jpg': contentType = 'image/jpg'; break;
  }
  
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } else {
    // Serve index for SPA routing
    const indexContent = fs.readFileSync('./dist/index.html');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(indexContent);
  }
});

server.listen(8080, '0.0.0.0', () => {
  console.log('Simple server running on port 8080');
});