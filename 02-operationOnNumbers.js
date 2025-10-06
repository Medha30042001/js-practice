

function operationOnNumbers(number) {
    let ans = (((number * 3) + 7) - 10);
    return ans
}

function main(){
  const number = require('fs').readFileSync(0, 'utf-8').trim();
  console.log(operationOnNumbers(parseInt(number)));
}

main();
