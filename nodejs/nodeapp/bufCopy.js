var buf1 = Buffer.from('abcdefghijklmnopqrstu');
var buf2 = Buffer.from("HELLOWORLD");

// buf2.copy(buf1, 2);
// buf2.copy(buf1, 2, 0, 5); 
// buf1의 index 2에 붙이는데 0~4까지만(5는 길이 index아님) 붙인다.
buf1.write('hello world', 2); //추가가 아니라 바꿔치기

console.log(buf1);
console.log(buf1.toString());


