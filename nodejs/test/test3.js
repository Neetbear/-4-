const fileSystem = require("fs");

var buf1 = Buffer.alloc(1024);
var txt1 = '';
function columnFunc()  {
    let i, j; 
    for(i = 2; i < 10; i++) {
        for(j = 0; j < 10; j++){ 
            if(j == 0 ) {
                txt1 += "\n"; 
            }
            else {
                txt1 += i + " * " + j + " = " + (i*j) + "\n"; 
            }  
        }
    }
    return txt1;
};

console.log("Open file");
fileSystem.open('test1.txt', 'w+', (err, fd) => {
    if(err) return console.error(err);

    console.log("open success");

    console.log("Writing file!!!");
    fileSystem.write(fd, columnFunc(), function(err, written, str) {
        if(err) return console.error(err);

        console.log("Data Written Success");

        console.log("Reading file");
        fileSystem.read(fd, buf1, 0, buf1.length, 0, (err, bytes, bf) => {
            if(err) return console.error(err);

            console.log("reading success");
            if(bytes > 0) console.log(buf1.slice(0, bytes).toString());

            fileSystem.close(fd, (err) => {
                if(err) return console.error(err);

                console.log("file closed success");
            });
        });
    });
});

var buf2 = Buffer.alloc(1024);
var txt2 = '';
function columnFunc()  {
    let n, m;
    let text = "";
    let l;
    let o;
    for(n = 1; n < 10; n++) {
        for(m = 2; m < 10; m++) {
            o = (n*m).toString();
            l = o.padStart(2, "0");
            txt2 += m + " * " + n + " = " + l + "\t"; 
        }
        txt2 += "\n";
    }
    return txt2;
};

console.log("Open file");
fileSystem.open('test2.txt', 'w+', (err, fd) => {
    if(err) return console.error(err);

    console.log("open success");

    console.log("Writing file!!!");
    fileSystem.write(fd, columnFunc(), function(err, written, str) {
        if(err) return console.error(err);

        console.log("Data Written Success");

        console.log("Reading file");
        fileSystem.read(fd, buf2, 0, buf2.length, 0, (err, bytes, bf) => {
            if(err) return console.error(err);

            console.log("reading success");
            if(bytes > 0) console.log(buf2.slice(0, bytes).toString());

            fileSystem.close(fd, (err) => {
                if(err) return console.error(err);

                console.log("file closed success");
            });
        });
    });
});
