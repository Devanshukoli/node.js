--> After installing node.js into your local system. Build first `web server`.

- create a file called `app.js`.
in which write this content.(In first don't try to learn everything.)
// first declare a variable called 'http' which uses `require()` function.
const http = require('http');

// declare 2 variables to store the hostname(which host should provided it.) and port(which port it to listing.)
const hostname = '127.0.01';
const port = 3000;

// now for 
const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('This is my first web-server created by you.');
})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
})