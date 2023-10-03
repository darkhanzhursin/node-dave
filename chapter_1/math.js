const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

module.exports = { add, subtract, multiply, divide };

/* 
We can use exports keyword also instead of module.exports:
exports.subtract = (a, b) => a - b;
*/