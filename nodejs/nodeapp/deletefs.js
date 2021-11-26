const fs = require("fs");

console.log("delete delete.txt file");
fs.unlink('delete.txt', (err) => {
    if(err) return console.error(err);

    console.log("delete.txt deleted success");
})