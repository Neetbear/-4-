const fs = require("fs");

console.log("reading directory");
fs.readdir('./temp/hellodir', (err, files) =>{
    if(err) throw err;

    // 하나씩 읽겠다고 쓰는거
    files.forEach((file) => {
        console.log(file);
    });
});