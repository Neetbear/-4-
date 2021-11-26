const fs = require("fs"); // c언어에서는 ''와 "" 차이가 있다 

console.log("remove dir");
fs.rmdir('./temp/hellodir', (err) => {
    if(err) throw err;

    fs.readdir('./temp/', (err, files)=>{
        if(err) throw err;

        files.forEach((file) => {
            console.log(file);
        });
    });
    console.log("remove success");
});
// 에러 파일 내용물 없어야 삭제된다 