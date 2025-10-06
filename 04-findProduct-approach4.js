// Screenshot: 04-findProduct.png
// My solution (approach 4)

function main() {
  const fs = require('fs');
  
  // Step 1: Read the entire line of input
  const input = fs.readFileSync(0, 'utf-8').trim();
  
  // Step 2: Split the line into an array of strings
  const numbers = input.split(' ').map(Number);
  
  // Step 3: Calculate product
  let product = 1;
  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }

  // Step 4: Print result
  console.log(product);
}

main();
