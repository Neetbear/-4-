const http = require("http");
const fs = require("fs");
const url = require("url"); // 웹브라우저 주소

var port = 3000;
var strIp = '127.0.0.1';

var server = http.createServer((req, res) => {
    var pathName = url.parse(req.url).pathname;

    console.log("request for " + pathName + "recieved!!!");
    fs.readFile(pathName.substr(1), (err, data) => {
        if(err) {
            // Http Status : 404 : Not Found
            // Content Type : text/html
            res.writeHead(404, {'Content-Type' : 'text/html; charset-utf8'});
        }
        else {
            // Http Status : 200 : Not Found
            // Content Type : text/html
            res.writeHead(200, {'Content-Type' : 'text/html; charset-utf8'});
            res.write(data.toString());
        };
        // send the respond body
        res.end();
    });
});

server.listen(port, strIp, () => {
    console.log(`Server running at http://${strIp}:${port}/`);
});
