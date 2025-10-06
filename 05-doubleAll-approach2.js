//mine, but more organized

function doubleAll(one, two, three, four, five) {
  let sum = (one * 2) + (two * 2) + (three * 2) + (four * 2) + (five * 2);
  return sum;
}

function main() {
  const fs = require('fs');
  const input = fs.readFileSync(0, 'utf-8').trim();
  const arr = input.split(' ');

  const one = parseInt(arr[0]);
  const two = parseInt(arr[1]);
  const three = parseInt(arr[2]);
  const four = parseInt(arr[3]);
  const five = parseInt(arr[4]);

  console.log(doubleAll(one, two, three, four, five));
}

main();
