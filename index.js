function hasTargetSum(array, target) {
  // Write your algorithm here
  const myNumbObject = {} 
   //n steps
   for (let i = 0; i < array.length; i++) {
    const noToBeAdded = target - array[ i ];
    if (myNumbObject[ noToBeAdded ]) return true;
    myNumbObject[ array[ i ] ] = true;
  }
  return false;
}
//optimize code
function hasTargetSum(array, target) {
  const myNumbObject = {} 

  for (const number of array) { 
    const noToBeAdded = target - number;
    if (myNumbObject[ noToBeAdded ]) return true;
    myNumbObject[number] = true;
  }
  return false;
}
/* 
  Write the Big O time complexity of your function here
  
*/

/* 
  Add your pseudocode here
//create an object to keep track of numbers we've already seen
//iterate through each number in the array
//for the current number ,identify a compliment that adds to the target ()
//check if any key on our object is the compliment
//if so return true
//otherwise add that number to the object
//if no number found return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  if (require.main === module) {
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", hasTargetSum([1, 2, 5], 4));
  
    console.log("");
  
    console.log("");
    // Negative numbers?
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));
  
    console.log("");
    // Multiple pairs?
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([1, 2, 3, 4], 5));
  
    console.log("");
    // Single numbers?
    console.log("Expecting: false");
    console.log("=>", hasTargetSum([4], 4));
  }
}

module.exports = hasTargetSum;
