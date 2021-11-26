var fs = require("fs");

console.log("Get file information");
fs.stat('input.txt', (err, stat) => {
    if(err) return consolel.error(err);

    console.log(stat);
    console.log("get file information success!!!");
    
    console.log("is File? " + stat.isFile());
    console.log("is Directory? " + stat.isDirectory());
});

