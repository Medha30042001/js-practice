//my approach

function sumAndCompare(one, two, three, four, five) {
    let sum1 = one + two + three;
    let sum2 = four + five;
    
    if(sum1>sum2) return true
    else return false;
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let a = input.split(' ');
  console.log(sumAndCompare(parseInt(a[0]), parseInt(a[1]), parseInt(a[2]), parseInt(a[3]), parseInt(a[4])));
}

main();
