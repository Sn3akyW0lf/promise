const http = require('http');
const fs = require('fs');

// function rqListener (req, res) {

// }

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);
    // console.log('Siddhesh Meher');
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        
        fs.readFile('message.txt', {encoding: 'utf-8'} , (err, buff) => {
            if (err) {
                console.log(err);
            }
            res.setHeader('Content-Type', 'text/html');
            res.write('<html');
            res.write('<head><title>Enter Message</title></head>');
            res.write(`<body>${buff}</body>`);
            res.write(
                '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
            );
            res.write('</html>');
            return res.end();
        });
        // console.log(text);
        // res.write(text);

    } else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            // console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            // console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });

    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Hello from my Node.JS Project</body>')
        res.write('</html>');
        res.end();
    }
});

server.listen(3000);