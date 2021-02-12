const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello, World!');
}).listen(8080, (error) => {
    if (error) {
        console.error(error);
        process.exit(1);
    }

    console.log('Server listening on http://localhost:8080/');
});
