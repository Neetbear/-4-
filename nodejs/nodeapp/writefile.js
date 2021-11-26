const fs = require("fs");

console.log("Writing file!!!");
fs.writeFile('input.txt', 'This is file writing test in nodejs!!!!', function(err) {
    if(err) return console.error(err);

    console.log("Data Written Success!!!");

    console.log("Read new file data");

    fs.readFile('input.txt', (err, data) => {
        if(err) return console.error(err);

        console.log("Async file reading : " + data);
    });
});

// var data = fs.readFileSync('input.txt');
// console.log(data.toString());