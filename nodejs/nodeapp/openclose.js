const fileSystem = require("fs");

var buf = Buffer.alloc(1024);

console.log("Open exsiting input.txt file!!!!");
fileSystem.open('input.txt', 'r+', (err, fd) => {
    if(err) return console.error(err);

    console.log("input.txt open success!!!!");

    console.log("Reagind input.txt file");
    fileSystem.read(fd, buf, 0, buf.length, 0, (err, bytes, bf) => {
        if(err) return console.error(err);

        console.log("input.txt reading success!!!!");
        if(bytes > 0) console.log(buf.slice(0, bytes).toString());

        fileSystem.close(fd, (err) => {
            if(err) return console.error(err);

            console.log("input.txt file closed success!!!");
        });
    });
});