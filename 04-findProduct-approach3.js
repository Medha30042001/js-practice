// Screenshot: 04-findProduct.png
// My solution (approach 3)

const fs = require('fs');
const numbers = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number);
const product = numbers.reduce((a, b) => a * b);
console.log(product);
