const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const pipeline = promisify(require('stream').pipeline);

app.use(bodyParser.json());
app.use(cors());
const pool = require("./mysqlcon");

var storage  = multer.diskStorage({ 
  destination: (req, file, cb) => {
    cb(null, './uploadedFiles/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now()+ path.extname(file.originalname));
  },
});
var uploadWithOriginalFilename = multer({ storage: storage });
app.post("/api/goodsupload", uploadWithOriginalFilename.array("file", 10), async function(req, res, next) {
  console.log(req.body);
});
  // await pipeline(file.stream, fs.createWriteStream(`${__dirname}/../uploadedFiles/${fileName}`)) 
  // const title = req.body.title;
  // const price = req.body.price;
  // const description = req.body.description;
  // const img = req.body.downFiles;
  // const imgs = `/uploadFiles/${req.file.name}`;
  // const sqlQuery = `INSERT INTO testgoods (goods_title, goods_img, goods_price, goods_description) values (?, ?, ?, ?);`
  // pool.getConnection((err, connection) => {
  //   if(err) throw err;
    
  //   connection.query(sqlQuery, [title, imgs, price, description], (err, result) => {
  //     if(err) throw err;

  //     console.log(result);
  //     res.send('success!');
  //     connection.release();
  //   });
  // });


const port = 5001;
app.listen(port, () => console.log(`express is running on ${port}`));