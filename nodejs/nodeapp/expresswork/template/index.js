const express = require("express");
const app = express();

app.set('view engine', 'pug');
// pug 엔진 ejs 쓸거면 ejs로 
app.set('views', './views');
// views로 views 폴더에 연결

const port = 3000;
const host = '127.0.0.1';

app.get('/firsttemp', (req, res) => {
    res.render('firstview');
});

app.get('/dynamic_view', (req, res) => {
    res.render('dynamic', {
        name:"KDigital 4 class",
        url:"https://www.daum.net/"
    });
});

// 한 pug로 돌려막기도 가능
// app.get('/dynamic_view2', (req, res) => {
//     res.render('dynamic', {
//         name:"Apple home page",
//         url:"https://www.apple.com/"
//     });
// });

app.get('/dynamic_view2', (req, res) => {
    res.render('dynamic2', {
        name:"Apple home page",
        url:"https://www.apple.com/"
    });
});

app.get('/hi', (req, res) => {
    res.render('hifriend', {
        user:{name: "Micheal", age:"20"}
    });
});

app.get('/components', (req, res) => {
    res.render('contents');
});

app.listen(port, host, () => {
    console.log(`Index application running at http://${host}:${port}/`);
});