const express = require("express");
const app = express();

const port = 3000;
const host = '127.0.0.1';

const routing = require('./router.js');
// module.exports = router;를 땡겨오고 

app.use('/router', routing);
// use를 통해서 사용

app.listen(port, host, () => {
    console.log(`index server running at http://${host}:${port}`);
});