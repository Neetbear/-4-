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