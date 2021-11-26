const { response } = require("express");
const express = require("express");
let app = express();

app.get('/', (req, res) => {
    console.log("Get request for /(root page)!!!")
    res.send("Hello Get / ");
});

app.post('/', function(req, res) {
    console.log("Get a port request the root page!!!");
    res.send("Hello Post /");
});

//delete할게 없어서 반응 없음 action을 취해줘야함 / get은 언제나 되나 post랑 delete는 어떤 액션이 필요함
app.delete('/del_user', function(req, res) {
    console.log("Get delete user request for /del_user");
    res.send("Hello Delete");
});

app.get('/list_user', (req, res) => {
    console.log("Get request for /list_user");
    res.send("User Listing to page");
});

// ab*cd는 ab랑 cd 사이에 뭐가 드가든이라는 뜻
app.get("/ab*cd", (req, res) => {
    console.log("Get request for /ab*cd");
    res.send("Display pattern matching route");
});

var server = app.listen(3000, () =>{
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server app listening at http://%s:%s", host, port);
});
