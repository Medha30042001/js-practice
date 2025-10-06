// Screenshot: 04-findProduct.png
// My solution (approach 2)

function main() {
  const fs = require('fs');
  
  // Step 1: Read the input line
  const input = fs.readFileSync(0, 'utf-8').trim();

  // Step 2: Split it by spaces into an array of strings
  const parts = input.split(' '); // ["1", "2", "3", "4", "5"]

  // Step 3: Start with product = 1
  let product = 1;

  // Step 4: Loop through each part and multiply
  for (let i = 0; i < parts.length; i++) {
    const num = parseInt(parts[i]); // convert string to number
    product = product * num;
  }

  // Step 5: Print the result
  console.log(product);
}

main();
