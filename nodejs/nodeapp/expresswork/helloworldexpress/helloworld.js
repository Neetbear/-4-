const express = require("express");
const app = express();
// application 생성 (createserver 된거)

// '/' 루트에 대해서 app.get이 받아준거
app.get('/', (req, res) => {
    res.end('Hello World');
});

// '/hellodir' 라우팅 받을 애
app.get('/hellodir', (req, res) => {
    res.end('Hello dir');
});

var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server listening at http://%s:%s", host, port);
});