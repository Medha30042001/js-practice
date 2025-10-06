

function doubleAll(one, two, three, four, five) {
    let doubleArr = [2*one, 2*two, 2*three, 2*four, 2*five];
    return doubleArr;
}

function main(){
  const input = require('fs').readFileSync(0, 'utf-8').trim();
  let arr = input.split(' ');
  let newArr = doubleAll(parseInt(arr[0]), parseInt(arr[1]), parseInt(arr[2]), parseInt(arr[3]), parseInt(arr[4]));
  console.log(newArr[0]+newArr[1]+newArr[2]+newArr[3]+newArr[4]);
}

main();
