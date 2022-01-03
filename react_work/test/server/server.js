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

app.post('/api/signup', (req, res) => {
    const text = req.body.name;

    pool.getConnection((err, connection) => {
        if(err) throw err;

        var password = req.body.password;
        const encryptResult = encrypt(password);
        var sQuery = `INSERT INTO userinfo (userid, userpassword, usernickname, useremail, userphonenumber, useraddress, useraddressdetail, usercategory) 
            VALUES ('${req.body.id}', '${req.body.password}', '${req.body.usernickname}', '${req.body.useremail}', '${req.body.userphonenumber}', '${req.body.useraddress}', '${req.body.useraddressdetatil}', '')`;
        var checkQuery = `SELECT userid FROM userinfo where userid='${req.body.id}'`;
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
                res.send("<script>alert('회원가입이 완료되었습니다.'); window.close();</script>");
            };
        });
    });
});

const port = 5000;
app.listen(port, () => console.log(`express is running on ${port}`));