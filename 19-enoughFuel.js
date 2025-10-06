//my approach

function enoughFuelConsumption(fuel, distance) {
    let required = fuel*distance;
    if(required>50) return 'Enough'
    else return 'Go On';
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let a = input.split(' ');
  console.log(enoughFuelConsumption(parseInt(a[0]), parseInt(a[1])));
}

main();
