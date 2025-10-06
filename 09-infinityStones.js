//my approach

function infinityStones(one, two, three, four, five, six) {
    return (one + ((two+five+six)*2) + (three+four)*3);
    
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let parts = input.split(' ');
  console.log(infinityStones(parseInt(parts[0]),parseInt(parts[1]),parseInt(parts[2]),parseInt(parts[3]),parseInt(parts[4]),parseInt(parts[5])));
}

main();
