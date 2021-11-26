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

// 과제13 모듈 하나 install해서 한파일로 압축해보기