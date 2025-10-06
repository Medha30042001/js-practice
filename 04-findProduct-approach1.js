// Screenshot: 04-findProduct.png
// My solution (approach 1)

function findProduct(A,B,C,D,E){
  let ans = A * B * C * D * E;
  return ans;
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let arr = input.split(' ');
  
  let A = parseInt(arr[0]);
  let B = parseInt(arr[1]);
  let C = parseInt(arr[2]);
  let D = parseInt(arr[3]);
  let E = parseInt(arr[4]);
  
  console.log(findProduct(A,B,C,D,E));
}

main();
