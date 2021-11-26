var assert = require('assert');

var x = {a: {n: 0}};
var y = {a: {n: 0}};
var z = {a: {n: 1}};
var zz = {a: {n: 1}};

assert.deepEqual(x, y);
console.log("Hello World!!!");
assert.deepEqual(x, z, "x not equal z!!!"); // 에러 메시지 찍기?
console.log("Hello Node!!!");