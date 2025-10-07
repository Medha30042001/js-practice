//my approach

function compareFourNumbers(one, two, three, four) {
    if(one > two && three > four) return 'Yes'
    else return 'No';
    
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let a = input.split(' ').map(Number);
  console.log(compareFourNumbers(a[0], a[1], a[2], a[3]));
}

main();
