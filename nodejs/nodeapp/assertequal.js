var assert = require('assert');

assert.equal(50, 50); //ok
assert.equal(50, "50"); //ok 타입 무시 ==느낌임
assert.equal(50, 70, "Each number is not equal");