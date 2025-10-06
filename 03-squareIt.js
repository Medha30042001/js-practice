// Screenshot: 03-squareIt.png
// My solution (approach 1)

function squareIt(N) {
    let ans = N * N;
    return ans;
}

function main(){
  const N = require('fs').readFileSync(0, 'utf-8').trim();
  console.log(squareIt(parseInt(N)));
}

main();
