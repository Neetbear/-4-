const http = require("http");
const port = 3000;
const strIp = '127.0.0.1';

var server = http.createServer((req, res) => {
    res.writeHead(200, {'Constent-Type' : 'text/html; charset-utf8'});
    res.write(req.url);
    res.end();
});

server.listen(port, strIp, () => {
    console.log(`server running at http://${strIp}:${port}/`);
});