const express = require("express");
const app = express();
const api = require("./routes/index");
const cors = require("cors");
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

app.use(bodyParser.json());
app.use(cors());
app.use("/api", api);
const pool = require("./mysqlcon");

var storage  = multer.diskStorage({ // 2
    destination(req, file, cb) {
      cb(null, 'uploadedFiles/');
    },
    filename(req, file, cb) {
      cb(null, `${Date.now()}__${file.originalname}`);
    },
  });
  var uploadWithOriginalFilename = multer({ storage: storage });
  
  app.post("/api/goodsupload", uploadWithOriginalFilename.array("goods_img"), (req, res)=> {
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const imgs = `/uploadFiles/${req.file.name}`;
    const sqlQuery = `INSERT INTO testgoods (goods_title, goods_img, goods_price, goods_description) values (?, ?, ?, ?);`
    pool.getConnection((err, connection) => {
      if(err) throw err;
      
      connection.query(sqlQuery, [title, imgs, price, description], (err, result) => {
        if(err) throw err;
  
        console.log(result);
        res.send('success!');
        connection.release();
      });
    });
  });

const port = 5001;
app.listen(port, () => console.log(`express is running on ${port}`));