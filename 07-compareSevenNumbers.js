//my approach

function compareSevenNumbers(a,b,c,d,e,f,g) {
    if(((a+b)*c) > (d+e+f+g)){
      return true;
    }
    else return false;
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let parts = input.split(' ');
  console.log(compareSevenNumbers(parseInt(parts[0]),parseInt(parts[1]),parseInt(parts[2]),parseInt(parts[3]),parseInt(parts[4]),parseInt(parts[5]),parseInt(parts[6])));
}

main();
