//my approach

function logicalEvens(one, two) {
    if(one%2==0 && two%2==0) return 'Both'
    else return 'No';
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let a = input.split(' ').map(Number);
  console.log(logicalEvens(a[0], a[1]));
}

main();
