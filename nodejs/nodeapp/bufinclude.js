var buf = Buffer.from('Hello, and welcome to Hell!');
var x = "abc";

// console.log(x.toJSON()); string은 안먹음

console.log(buf.toString('ascii'));
console.log(buf.toJSON());
console.log("=========================");
console.log(buf.includes('welcome1'));

console.log("=========================");
console.log(buf.indexOf('welcome'));

console.log("=========================");
console.log(buf.indexOf('l'));
console.log(buf.lastIndexOf('l'));
console.log("=========================");
console.log("buf length = " + buf.length);

console.log("=========================");
console.log(Buffer.isBuffer(buf)); // 버프가 맞냐고 물어보는거
console.log(Buffer.isBuffer(x));


console.log("=========================");
console.log(Buffer.isEncoding('ascii')); 

// "ascii" 한글은 깨짐
// "utf8"
// "utf16le"
// "ucs2"
// "base64"
// "binary"
// "hex"