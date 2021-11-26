const fs = require("fs");
var buf = Buffer.alloc(1024);

console.log("Open input.txt file");
fs.open('input.txt', 'r+', function(err, fd) {
    if(err) return console.error(err);

    console.log("input.txt open success");

    console.log("truncate ipnut.txt file after 20bytes");
    fs.ftruncate(fd, 20, (err) => { // ftruncate 임 주의 truncate 아님
        if(err) return console.error(err);

        console.log("input.txt truncated success")
        fs.read(fd, buf, 0, buf.length, 0, (err, bytes, dataBuf) => {
            if(err) return console.error(err); // 리턴 빼면 오류처리 안됨 계속 처리해서

            console.log("input.txt reading success");
            if(bytes > 0) {
                console.log(buf.slice(0,bytes).toString());
            };
            
            console.log("close input.txt");
            fs.close(fd, (err)=>{
                if(err) return console.log(err);
                
                console.log("input.txt closed success");
            });
        });
    });
    //지금은 비동기라 여기서 안하고 동기일때는 여기서 close 하는게 더 좋음?
});