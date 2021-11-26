const fs = require("fs");
var buf = Buffer.alloc(1024); // 옛날버전엔 new Buffer 먹혔는데 이젠 안씀

console.log("Open existing file!!!");
fs.open('input.txt','r+', function(err, fd) {
    if(err) return console.error(err);

    console.log("File open success!!!");

    console.log("Reading file!!!");

    fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
        if(err) return console.error(err);

        console.log("Reading file success");    

        if(bytes > 0) console.log(buf.slice(0, bytes).toString()); // 읽은만큼만 출력
    });
});

