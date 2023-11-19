const http = require('http');

// function rqListener (req, res) {

// }

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);
    // console.log('Siddhesh Meher');
    res.setHeader('Content-Type', 'text/html');
    res.write('<html');
    res.write('<head><title>My First Page</title></head>');
    if (req.url == '/home') {
        // console.log('Welcome home');
        res.write('<body><h1>Welcome Home</body>');
    } else if (req.url == '/about') {
        res.write('<body><h1>Welcome to About Us page</body>');
    } else if (req.url == '/node') {
        res.write('<body><h1>Welcome to my Node.JS Project</body>');        
    }
    res.write('</html>');
    res.end();
});

server.listen(4000);