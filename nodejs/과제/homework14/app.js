const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();
const dotenv = require('dotenv').config();
const session = require("express-session");

app.use(express.static('views'));

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(upload.array());
app.use(session({
    secure: false,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie : {
        maxAge:(1000 * 60 * 100)
    },
}));

const host = '127.0.0.1';
const port = 3000;
// const host = process.env.HOST;
// const port = process.env.PORT;

var Users = [];

app.get('/', (req, res) => {
    res.render('signup'); 
});

app.post('/info', (req, res) => {
    var newUser = {
        id: req.body.id, 
        password: req.body.password, 
        username: req.body.username, 
        address: req.body.address
    };
    res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
    res.end(`이름 : ${newUser.username} \n아이디 : ${newUser.id} \n주소 : ${newUser.address} \n비밀번호 : ${newUser.password}`)
    Users.push(newUser);
    req.session.users = newUser;
    console.log(JSON.stringify(newUser));
    res.redirect('/result');
});

app.get('/result', (req, res) => {
    
    const result = JSON.parse(newUser.toString(newUser));
    res.render('result', JSON.stringify(newUser)); 

});

app.listen(port, host, () => {
    console.log(`Application running at http://${host}:${port}/`);
})