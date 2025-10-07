//my approach

function twoSumsOneNumberII(one, two, three, four, five, six) {
    let sum1, sum2;
    sum1 = one + two;
    sum2 = four + five;
    if(sum1 > three && sum2 > six) return 'Yes'
    else return 'No';
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let a = input.split(' ').map(Number);
  console.log(twoSumsOneNumberII(a[0], a[1], a[2], a[3], a[4], a[5]));
}

main();
