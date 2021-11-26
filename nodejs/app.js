var http = require('http');
var dt = require('./myfristnodemodule');
const homePage = '127.0.0.1'; //로컬호스트 아이피임
const port = 3000;

const server = http.createServer(function(req, res) {
    // res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    res.statusCode = 200; //브라우저가 스테이터스 체크해줘야해서 드가긴해야함
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
});

server.listen(port, homePage, () => {
    console.log(`Server runnig at http://${homePage}:${port}`);
});