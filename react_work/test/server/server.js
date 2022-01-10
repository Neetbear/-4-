const express = require("express");
const app = express();
const api = require("./routes/index");
const cors = require("cors");
const bodyParser = require('body-parser');
const session = require("express-session");
// const dotenv = require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const corsOptions = {
    origin : "http://localhost:3000",
    credentials : true
};
app.use(cors(corsOptions));
app.use("/api", api);
const pool = require("./mysqlcon");
app.use(session({
    secure: false,
    secret: "1234",
    resave: false,
    saveUninitialized: true,
    cookie : {
        maxAge:(1000 * 60 * 30)
    },
}));

app.post("/api/signin", (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err;

        var sQuery = `SELECT userid, userpassword, useraddress FROM signuptestdb where userid='${req.body.signinid}'`;   
        connection.query(sQuery, (err, result, fields) => {
            if(err) res.send({err: err});

            console.log(result[0]);
            if(result.length == 0) {
                console.log("아이디 오류");
                connection.release();
                res.send({message: "id error"});
            }
            else if(req.body.signinid == result[0].userid) {
                if(req.body.signinpassword == result[0].userpassword) {
                    console.log("로그인 성공");
                    console.log(result[0])
                    req.session.uid = result[0].userid;
                    console.log(req.session.uid);
                    connection.release();
                    res.send(result[0]);
                }
                else {
                    console.log("비밀번호 오류");
                    connection.release();
                    res.send({message: "password error"});
                }
            }; 
        });
    });
})

app.post("/api/signup", (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err;

        var sQuery = `INSERT INTO signuptestdb  (userid, userpassword, usernickname, useremail, userphonenumber, useraddress, useraddressdetail, usercategory) 
            VALUES ('${req.body.userid}', '${req.body.userpassword}', '${req.body.usernickname}', '${req.body.useremail}', '${req.body.userphonenumber}', '${req.body.useraddress}', '${req.body.useraddressdetatil}', '')`;
        var checkQuery = `SELECT userid FROM signuptestdb where userid='${req.body.userid}'`;
        // var sQuery2 = `SELECT * FROM userboard WHERE userid=${req.session.uid}`;
        
        connection.query(checkQuery, (err, result, fields) => {
            if(err) res.send({err: err});

            if(result[0]) {
                connection.release();
                console.log("이미 존재하는 아이디");
                res.send({message: "ID already exist"});
            } else {
                connection.query(sQuery, (err, result, fields) => {
                    if(err) throw err;
                
                    console.log("회원가입성공");
                });
                connection.release();
            };
        });
    });
});

app.post("/api/mypage", (req, res) => {
    console.log(req.body.signinid);
    pool.getConnection((err, connection) => {
        if(err) throw err;

        var sQuery = `SELECT * FROM signuptestdb where userid='${req.body.signinid}'`;
        connection.query(sQuery, (err, result, fields) => {
            if(err) res.send({err: err});

            console.log(result[0]);
            connection.release();
            res.send(result[0]);
        });
    });
});

const port = 5000;
app.listen(port, () => console.log(`express is running on ${port}`));