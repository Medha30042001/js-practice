// Screenshot: multiplyBy50.png
// My solution (approach 2)

const fs = require('fs');

function input() {
  return fs.readFileSync(0, 'utf-8').trim();
}

function multiplyBy50(number) {
  return number * 50;
}

function main() {
  const number = parseInt(input());   // looks a lot like prompt()
  console.log(multiplyBy50(number));
}

main();
