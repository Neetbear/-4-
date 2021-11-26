const fs = require("fs");
const zlib = require("zlib");
const gzip = zlib.createGzip();

fs.readdir("./source/", (err, files) => {
    if (err) throw err;

    files.forEach((file) => {
        fs.createReadStream(`./source/${file}`).pipe(fs.createWriteStream(`./target/${file}`));

        fs.createReadStream(`./source/${file}`)
            .pipe(zlib.createGzip())
            .pipe(fs.createWriteStream(`./target/${file}.gz`));
    });

});
