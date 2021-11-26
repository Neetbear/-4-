var buf1 = Buffer.from('b');
var buf2 = Buffer.from('c');
var buf3 = Buffer.from('a');
var arr = [buf1, buf2, buf3];

var buf = Buffer.concat(arr);
console.log(buf);