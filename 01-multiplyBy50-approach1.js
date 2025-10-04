// Screenshot: multiplyBy50.png
// My solution (approach 1)

function multiplyBy50(number) {
  return number * 50;
}

function main() {
  const fs = require('fs');
  const number = parseInt(fs.readFileSync(0, 'utf-8').trim());
  console.log(multiplyBy50(number));
}

main();
