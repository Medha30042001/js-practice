//my approach

function cubeAndSquare(n,m) {
    if(n**3 > m**2) return true
    else return false;
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let a = input.split(' ');
  console.log(cubeAndSquare(parseInt(a[0]), parseInt(a[1])));
}

main();
