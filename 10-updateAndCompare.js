//my approach

function updateAndCompare(num1, num2, num3) {
  let comp1 = false, comp2 = false;
  
  if(num1>num2) comp1 = true;
  if((num1+num3)>num2) comp2 = true;
  
  return [comp1, comp2]
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let parts = input.split(' ');
  let arr = updateAndCompare(parseInt(parts[0]), parseInt(parts[1]), parseInt(parts[2]))
  console.log(arr[0] + '\n' + arr[1]);
}

main();
