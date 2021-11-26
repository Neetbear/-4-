const fs = require('fs');

fs.rename('lorem.txt', 'hello.txt', (err) => {
    if(err) throw err; // try catch 할때 그 throw임 

    console.log('File rename success');
});