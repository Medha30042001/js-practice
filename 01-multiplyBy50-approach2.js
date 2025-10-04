// Screenshot: multiplyBy50.png
// My solution (approach 2)

function multiplyBy50(number) {
    let ans = number * 50;
    return ans;
}

function main(){
  const number = require('fs').readFileSync(0, 'utf-8').trim();
  console.log(multiplyBy50(parseInt(number)));
}

main();
