//my approach

function doubleTwoTripleOne(one, two, three, four) {
    return (one*2) + (two*2) + (three*3) + (four+4);
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let parts = input.split(' ');
  console.log(doubleTwoTripleOne(parseInt(parts[0]), parseInt(parts[1]), parseInt(parts[2]), parseInt(parts[3])));
}

main();
