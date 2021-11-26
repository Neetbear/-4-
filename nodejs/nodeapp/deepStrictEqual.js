var assert = require('assert');

var x = {a: 
    {n: 0}
};
var y = {a: 
    {n:'0'}
};

// deepStrictEqual은 ===이거랑 같은거다
assert.deepStrictEqual(x, y, "x not equal y !!!!");