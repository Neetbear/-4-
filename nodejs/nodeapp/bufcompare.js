var buf1 = Buffer.from('abc');
var buf2 = Buffer.from('abc');
var x = Buffer.compare(buf1, buf2);

console.log(x); // 같으면 0 다르면 1

var buf1 = Buffer.from('a');
var buf2 = Buffer.from('b');
var x = Buffer.compare(buf1, buf2);

console.log(x); // -1? buf2가 더 큰값이라서 


//=========================================
var buf1 = Buffer.from('b');
var buf2 = Buffer.from('c');
var buf3 = Buffer.from('a');
var arr = [buf1, buf2, buf3];

console.log(arr); //chunk
console.log("=====================");
console.log(arr.sort(Buffer.compare)); //sort(정렬)해서 출력