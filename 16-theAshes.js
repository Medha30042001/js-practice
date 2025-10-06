//my approach

function theAshes(Australia, England) {
    if(Australia>England) return 'Australia'
    else if (Australia<England) return 'England'
    else return 'Tie';
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let a = input.split(' ');
  console.log(theAshes(parseInt(a[0]), parseInt(a[1])));
}

main();
