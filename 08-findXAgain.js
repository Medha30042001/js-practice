//my approach

function findX(x) {
    return x*7*7;
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  console.log(findX(input));
}

main();
