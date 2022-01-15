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

var makeFolder = (dir) => {
  if(!fs.existsSync(dir)){
    fs.mkdirSync(dir)
  }
}
makeFolder("./public/uploadedFiles/");

var storage  = multer.diskStorage({ 
  destination: (req, file, cb) => {
    cb(null, './public/uploadedFiles/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now()+ path.extname(file.originalname));
  },
});
var uploadWithOriginalFilename = multer({ storage: storage });
app.post("/api/goodsupload", uploadWithOriginalFilename.array("images"), async function(req, res, next) {
  let filesname = '';
  for (let i = 0; i < req.files.length; i++) {
    filesname += '/uploadedFiles/'+req.files[i].filename+"#";
  }
  console.log(filesname);
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const sqlQuery = `INSERT INTO testgoods (goods_title, goods_img, goods_price, goods_description) values (?, ?, ?, ?);`
  pool.getConnection((err, connection) => {
    if(err) throw err;
    
    connection.query(sqlQuery, [title, filesname, price, description], (err, result) => {
      if(err) throw err;

      console.log(result);
      res.send('success!');
      connection.release();
    });
  });
});

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

const port = 5001;
app.listen(port, () => console.log(`express is running on ${port}`));