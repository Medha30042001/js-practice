//my approach

function oddEvenBoth(one, two) {
    if(one%2==0 && two%2==0) return 'Even'
    else if (one%2!=0 && two%2!=0) return 'Odd'
    else return 'Even-Odd';
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let a = input.split(' ').map(Number);
  console.log(oddEvenBoth(a[0], a[1]));
}

main();
