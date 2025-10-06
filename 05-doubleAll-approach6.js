//efficient version

function doubleAll(one, two, three, four, five) {
  return (one + two + three + four + five) * 2;
}

function main() {
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  const nums = input.split(' ').map(Number);
  console.log(doubleAll(...nums));
}

main();
