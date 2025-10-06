//using map

function doubleAll(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + (arr[i] * 2);
  }

  return sum;
}

function main() {
  const fs = require('fs');
  const input = fs.readFileSync(0, 'utf-8').trim();
  const arr = input.split(' ').map(Number); // converts all to numbers

  console.log(doubleAll(arr));
}

main();
