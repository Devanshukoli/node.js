// this is js file for hello world  in node.js
const http = require('http')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('This is not the first time I have created node.js server.\n')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})