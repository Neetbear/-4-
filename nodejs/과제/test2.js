const fs = require('fs');
let buf = Buffer.alloc(2048);
let pos = 0;  
let fsize = 0;
let scf = "";
let tgf = "";
let readbytes = 0;

fs.readdir('./source', (err, files) => {
    if (err) throw err;

    files.forEach((file) => {
        fs.stat('./source/' + file, (err, stats) => {
            if (err) throw err;

            fsize = stats.size;

            fs.open('./source/' + file, "r", (err, rfd) => {
                if (err) throw err;

                fs.open('./target/' + file, "w", (err, wfd) => {
                    if (err) throw err;

                    var i = 0;
                    while (fsize >0) {
                            readbytes = fs.readSync(rfd, buf, 0, buf.length, pos);
                            fs.writeSync(wfd, buf, 0, readbytes, pos);
                            pos += readbytes;
                            fsize -= readbytes;
                            i++;
                            console.log(`${i}*`);
                    }
                });
            });

        });
        while (fsize >0) {
            readbytes = fs.readSync(rfd, buf, 0, buf.length, pos);
            fs.writeSync(wfd, buf, 0, readbytes, pos);
            pos += readbytes;
            fsize -= readbytes;
            i++;
            console.log(`${i}*`);
        }
    });
    
});
