//short version

function doubleAll(one, two, three, four, five) {
  return (one + two + three + four + five) * 2;
}

function main() {
  const arr = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number);
  console.log(doubleAll(...arr));
}

main();
