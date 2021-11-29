// 기본 모듈
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const dotenv = require('dotenv').config();

// pug 사용 위한 작업
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('views'));

// application/json 방식의 content-type 데이터를 받아준다
app.use(bodyParser.json());
// jquery.ajax의 기본타입(application/x-www-form-urlencoded방식의 content-type 데이터를 받아준다.) / true라 qs library 사용
app.use(bodyParser.urlencoded({extended:true}));
// session 미들웨어 생성
app.use(session({
    secure: false,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie : {
        maxAge:(1000000)
    },
}));

// const host = process.env.HOST;
// const port = process.env.PORT;
const host = '127.0.0.1';
const port = 3000;

var Users = [];

// db연결용 모듈
const mysql = require('mysql');
var con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

app.get('/', (req, res) => {
    res.render('signup'); 
});

app.post('/signup', (req, res) => { 
    console.log(req.body.address);
    con.connect((err) => {       
        var sQuery = `INSERT INTO userinfo (userid, userpassword, username, useraddress) VALUES ('${req.body.id}', '${req.body.password}', '${req.body.username}', '${req.body.address}')`;
        
        con.query(sQuery, (err, result, fields) => {
            if(err) throw err;
            // console.log("Database NODEPOTFOLIO Create Success!!!");
            console.log(result);
            // console.log(fields);
        });
    });
    
    res.redirect('/result');
});

app.get('/result', (req, res) => {
    res.render('result', {
        userid: req.session.userinformation.userid,
        userpassword: req.session.userinformation.userpassword, 
        username: req.session.userinformation.username, 
        useraddress: req.session.userinformation.useraddress
    });     
});

app.listen(port, host, () => {
    console.log(`Application running at http://${host}:${port}/`);
}); 