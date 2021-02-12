const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200);
    res.end('<h1 style="text-align: center;">Site is temporarily down on maintenance.</h1>');
}).listen(8080, (error) => {
    if (error) {
        console.error(error);
        process.exit(1);
    }

    console.log('Server listening on http://localhost:8080/');
});
