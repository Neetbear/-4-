const fs = require("fs");

fs.readdir('./temp/hellodir', (err, files) =>{
    if(err) throw err;


    if(files > 0){
        fs.unlink(`./temp/hellodir/${file}`, (err) => {
            if(err) return console.error(err);
        });
    }
    else {
        fs.rmdir('./temp/hellodir', (err) => {
            if(err) throw err;
        })
    };
    // files.forEach((file) => {
    //      fs.unlink("./temp/hellodir/" + file, (err) => {
    //         if(err) return console.error(err);
    //     });
    // });
    // fs.rmdir('./temp/hellodir', (err) => {
    //     if(err) throw err;
    // })
});