const express = require("express");
const app = express();
const api = require("./routes/index");
const cors = require("cors");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", api);
const pool = require("./mysqlcon");

app.post("/api/signin", (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err;

        var sQuery = `SELECT userid, userpassword, useraddress FROM signuptestdb where userid='${req.body.signinid}'`;   
        connection.query(sQuery, (err, result, fields) => {
            if(err) throw err;

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

app.post("/api/changeuser", (req, res) => {
  pool.getConnection((err, connection) => {
    if(err) throw err;

    var sQuery = `UPDATE signuptestdb SET usernickname='${req.body.usernickname}', useremail='${req.body.useremail}', userphonenumber='${req.body.userphonenumber}', 
      useraddress='${req.body.useraddress}', useraddressdetail='${req.body.useraddressdetatil}' WHERE userid='${req.body.userid}'`;

    connection.query(sQuery, (err, result, fields) => {
      if(err) throw err;
      
      console.log("회원정보변경성공");
      connection.release();
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

app.get("/api/mainboard", (req, res)=>{
  const sqlQuery = "SELECT * FROM board1;";
  pool.getConnection((err, connection) => {
    if(err) throw err;
    
    connection.query(sqlQuery, (err, result)=>{
      res.send(result);
      connection.release();
    })
  })
})

app.get("/api/board", (req, res)=>{
  const sqlQuery = "SELECT * FROM board1;";
  pool.getConnection((err, connection) => {
    if(err) throw err;
    
    connection.query(sqlQuery, (err, result)=>{
      res.send(result);
      connection.release();
    })
  })
})

app.post("/api/map", (req, res) => {
  res.render(MapContainer);
});

app.post("/api/board", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const sqlQuery = `INSERT INTO board1 (title, content) VALUES (?,?)`;
  pool.getConnection((err, connection) => {
    if(err) throw err;
    
    connection.query(sqlQuery, [title, content], (err, result) => {
      res.send('success!');
      connection.release();
    });
  });
});

//===========================================

app.get("/api/goodsboard", (req, res)=> {
  const sqlQuery = "SELECT * FROM testgoods;"
  pool.getConnection((err, connection) => {
    if(err) throw err;
    
    connection.query(sqlQuery, (err, result)=>{
      res.send(result);
      connection.release();
    })
  })
})

// app.get('/api/goodsupload', function(req, res) {
//   res.sendFile(path.join(__dirname, '../src/pages/GoodsUpload/GoodsUpload.js'))
// });

app.post("/api/goodsupload", (req, res)=> {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const img = req.body.img
  const sqlQuery = `INSERT INTO testgoods (goods_title, goods_img, goods_price, goods_description) values (?, ?, ?, ?);`
  pool.getConnection((err, connection) => {
    if(err) throw err;
    
    connection.query(sqlQuery, [title, img, price, description], (err, result) => {
      if(err) throw err;

      console.log(result);
      res.send('success!');
      connection.release();
    });
  });
});

app.get("/api/goodspage/:goods_number", (req, res)=> {
  res.sendFile(path.join(__dirname, '../src/pages/GoodsPage/GoodsPage.js'))
  const sqlQuery = "SELECT * FROM testgoods WHERE goods_number = ?";

  pool.getConnection((err, connection) => {
    if(err) throw err;

    connection.query(sqlQuery, (err, result)=>{
      res.send(result[0]);
      connection.release();
    })
  })
});

const port = 5001;
app.listen(port, () => console.log(`express is running on ${port}`));