//my approach

function divisibleBy4(N) {
    if(N%4==0) return 'Yes'
    else return 'No';
}

function main(){
  const N = require('fs').readFileSync(0, 'utf-8').trim();
  console.log(divisibleBy4(N));
}

main();
