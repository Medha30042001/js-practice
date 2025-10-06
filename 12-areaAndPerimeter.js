//my approach

function areaAndPerimeter(L1,B1,L2,B2) {
    let comp1 = false, comp2 = false;
    if(L1*B1 > L2*B2) comp1 = true;
    if(2*(L1+B1) > 2*(L2+B2)) comp2 = true;
    return [comp1, comp2];
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let a = input.split(' ');
  let arr = areaAndPerimeter(parseInt(a[0]),parseInt(a[1]),parseInt(a[2]),parseInt(a[3]))
  console.log(arr[0] + '\n' + arr[1]);
}

main();
