const fs = require("fs");

var data = '';

var readStream = fs.createReadStream('input.txt');
readStream.setEncoding('utf-8');

readStream.on('data', function (chunk) {
    data += chunk;
});

readStream.on('end', () => {
    console.log(data);
});

readStream.on('error', (err) => {
    console.error(err.stack);
});

console.log("ReadStream file read finished!!!");
// console.log 먼저 출력되고 에러 메시지 출력 -> 왜?