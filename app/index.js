const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Taner project werkt!!!! </h1><p>De website is live via Docker en Caddy.</p>');
});

server.listen(3000, () => {
    console.log('App draait op poort 3000');
});
