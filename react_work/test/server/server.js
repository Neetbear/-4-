const express = require("express");
const app = express();
const api = require("./routes/index");
const cors = require("cors");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use("/api", api);
const pool = require("./mysqlcon");

app.post("/api/signin", (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err;

        var sQuery = `SELECT userid, userpassword FROM signuptestdb where userid='${req.body.signinid}'`;   
        connection.query(sQuery, (err, result, fields) => {
            if(err) throw err;

            console.log(result[0]);
            if(result.length == 0) {
                console.log("아이디 오류");
                connection.release();
                res.send('');
            }
            else if(req.body.signinid == result[0].userid) {
                if(req.body.signinpassword == result[0].userpassword) {
                    console.log("로그인 성공");
                    console.log(result[0])
                    connection.release();
                    res.send(result[0]);
                }
                else {
                    console.log("비밀번호 오류");
                    connection.release();
                    res.send('');
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
            if(err) throw err;

            if(result[0]) {
                connection.release();
                console.log("이미 존재하는 아이디");
                res.send('');
            } else {
                connection.query(sQuery, (err, result, fields) => {
                    if(err) throw err;
                
                    console.log("회원가입성공");
                });
                connection.release();
                res.send('');
            };
        });
    });
});

const port = 5000;
app.listen(port, () => console.log(`express is running on ${port}`));