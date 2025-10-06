//my approach

function masaiEvenOrOdd(N) {
    if(N%2==0) return 'Even'
    else return 'Odd';
}

function main(){
  const N = require('fs').readFileSync(0, 'utf-8').trim();
  console.log(masaiEvenOrOdd(N));
}

main();
