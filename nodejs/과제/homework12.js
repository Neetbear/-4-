const fs = require('fs');
let buf = Buffer.alloc(2048);
let pos = 0;
let fsize = 0;
let scf = "";
let tgf = "";

fs.readdir('./source', (err, files)=>{
    if(err) throw err;
    
    files.forEach((file) => {
        if("metallica_seattle.mp4" === file) {
            scf = './source/' + file;
            tgf = './target/' + file;
            fs.stat(scf, (err, stats) => {
                if(err) throw err;

                fsize = stats.size;
                
                var rfd = fs.openSync(scf, "r"); 
                var wfd = fs.openSync(tgf, "w");
                var i =0;
                while(true) {
                    var readbytes = fs.readSync(rfd, buf, 0, buf.length, pos);
        
                    if(fsize > buf.length) {
                        fs.writeSync(wfd, buf, 0, buf.length, pos);
                        pos += readbytes;
                        fsize -= readbytes;
                        i++;
                        console.log(`${i}*`);
                    }
                    else{
                        fs.writeSync(wfd, buf, 0, readbytes, pos);
                        fs.closeSync(rfd);
                        fs.closeSync(wfd);
                        i++;
                        console.log(`${i}*`);
                        break;
                    }
                }
            });
            return false;
        };

    });
});
