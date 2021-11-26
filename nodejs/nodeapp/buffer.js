//var buf = Buffer.from('abc');

//alloc은 메모리를 잡아준다  , 'a'이부분이 초기값주는거 fill 역할
//var buf = Buffer.alloc(15, 'a'); 

//allocunsafe는 00으로 초기화하지 않는다
var buf = Buffer.allocUnsafe(15);
buf.fill(10);

console.log(buf);