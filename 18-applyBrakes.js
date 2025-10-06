//my approach

function applyBrakes(distance, time) {
    let speed = distance/time;
    if(speed>40) return 'Apply Brake'
    else return 'Keep Going';
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let a = input.split(' ');
  console.log(applyBrakes(parseInt(a[0]), parseInt(a[1])));
}

main();
