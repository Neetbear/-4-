const fs = require("fs");

console.log("create dir");
fs.mkdir('./temp/hellodir', (err)=>{ // ./temp/hellodir 리눅스는 이렇게도 됨
    if(err) throw err;
    
    console.log("create success");
});