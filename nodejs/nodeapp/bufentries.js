var buf = Buffer.from('abcd');

for(x of buf.entries()) {
    console.log(x);
}

console.log("=========================")
for(x of buf.keys()) { // 키값만 찍힘
    console.log(x);
}

console.log("=========================")
for(x of buf.values()) { // value값만 찍힘
    console.log(x);
}