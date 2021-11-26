let i, j; 
let txt1 = ""; 
for(i = 2; i < 10; i++) {
    for(j = 0; j < 10; j++){ 
        if(j == 0 ) {
            txt1 += "\n"; 
        }
        else {
            txt1 += i + " * " + j + " = " + (i*j) + "\n"; 
        }  
    }
}
console.log(txt1)


let n, m;
let text = "";
let l;
let o;
for(n = 1; n < 10; n++) {
    for(m = 2; m < 10; m++) {
        o = (n*m).toString();
        l = o.padStart(2, "0");
        text += m + " * " + n + " = " + l + "\t"; 
    }
    text += "\n";
}
console.log(text);
let buf = Buffer.from(text);
console.log(buf);
console.log(typeof(buf));
console.log(buf.length);
console.log(buf.toString());