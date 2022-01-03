const express = require("express");
const app = express();
const api = require("./routes/index");
const cors = require("cors");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());
app.use("/api", api);
const pool = require("./mysqlcon");

app.post("/api/signup", (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err;

        var password = req.body.password;
        var sQuery = `INSERT INTO signuptestdb  (userid, userpassword, usernickname, useremail, userphonenumber, useraddress, useraddressdetail, usercategory) 
            VALUES ('${req.body.userid}', '${req.body.userpassword}', '${req.body.usernickname}', '${req.body.useremail}', '${req.body.userphonenumber}', '${req.body.useraddress}', '${req.body.useraddressdetatil}', '')`;
        var checkQuery = `SELECT userid FROM signuptestdb where userid='${req.body.userid}'`;
        // var sQuery2 = `SELECT * FROM userboard WHERE userid=${req.session.uid}`;
        

        connection.query(checkQuery, (err, result, fields) => {
            if(err) throw err;

            if(result[0]) {
                connection.release();
                res.send('<script>alert("이미 있는 아이디입니다 다시 입력해주세요");</script>');
            } else {
                connection.query(sQuery, (err, result, fields) => {
                    if(err) throw err;
                
                    console.log(result); 
                });
                connection.release();
                res.send("<script>alert('회원가입이 완료되었습니다.');</script>");
            };
        });
    });
});

const port = 5000;
app.listen(port, () => console.log(`express is running on ${port}`));