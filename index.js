function hasTargetSum(array, target) {
  console.log(array);
  let isHas = false;
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    for (let j = 0; j < array.length; j++) {
      console.log(array[j]);
      console.log(array[i] + array[j]);
      if (i !== j) {
        if (array[i] + array[j] === target) {
          isHas = true;
        }
      }
    }
  }
  return isHas;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  see if first number plus any of the other numbers adds to target
  loop through all numbers to see if that number and any of the others
  adds up to target
  perhaps use binary sum to reduce search time?

  loop through array
  nest another loop to loop through the rest of the array
  break loop if they do add up to target
*/


/*
  Add written explanation of your solution here
  The function should return true if any of the two numbers
  within the array add up to the specified number
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  // brandi tests
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
}

module.exports = hasTargetSum;
