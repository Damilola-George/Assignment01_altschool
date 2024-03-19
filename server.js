// ASSIGNMENT 1
//Create a Simple Server
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    res.write('<head> <title> Server</title> </head>');
    res.write('<body> <h1>Damilola George </h1> </body>');
    res.end('This is the end');


})

server.listen('8900', console.log ('server is running at port 8900'));