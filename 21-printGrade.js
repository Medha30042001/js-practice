//my approach

function printGrade(total) {
    if(total == 100) return 'A'
    else if (total >= 90) return 'B'
    else if (total >= 80) return 'C'
    else return 'F';
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  console.log(printGrade(input));
}

main();
