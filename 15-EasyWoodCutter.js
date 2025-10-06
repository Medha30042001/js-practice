//my approach

function easyWoodCutter(N) {
    if(N%3==0) return 'Yes'
    else return 'No'
}

function main(){
  const N = require('fs').readFileSync(0, 'utf-8').trim();
  console.log(easyWoodCutter(N));
}

main();
