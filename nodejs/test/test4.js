const fs = require("fs");

var readerStream = fs.createReadStream("./source/metallica_seattle.mp4");
var writerStream = fs.createWriteStream("./target/metallica_seattle.mp4");

readerStream.pipe(writerStream);

console.log("write pipe stream finished!!!");