const express = require("express");
const app = express(); // createserver하는거랑 똑같다

const host = '127.0.0.1';
const port = 3000;

app.get('/hello', function(req, res) {
    res.send("Hello World!!!");
});
// cmd 창에서 GET -X POST "http://localhost:3000/hello"로도 확인 가능

app.post('/hello', function(req, res) {
    res.send("You just called the post method at '/hello'");
});
// cmd 창에서 curl -X POST "http://localhost:3000/hello"로도 확인 가능

app.listen(port, host, () => {
    console.log(`Application Server running at http://${host}:${port}`)
});