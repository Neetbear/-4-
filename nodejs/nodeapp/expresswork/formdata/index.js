const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");

let upload = multer();
let app = express();

const host = '127.0.0.1';
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res)=> {
    res.render('form');
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(upload.array());
app.use(express.static('public'));

app.post('/', (req, res) => {
    console.log(req.body);
    res.send("recieved request");
});

app.listen(port, host, () => {
    console.log(`Appliciation server running at http://${host}:${port}/`)
});