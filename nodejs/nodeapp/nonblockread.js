var fs = require("fs");

fs.readFile('input.txt', function(err, data) {
    if(err) return console.log(err);
    console.log(data.toString());
});

console.log("Finished program");
// nonblocking이라 함수 도는중에 아래 콘솔부터 찍은거임