// O(n^2)
// function findSum(arr = [], value) {
//   let arrElement = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       // same number will not add to itself
//       if (j === i) {
//         continue;
//       }
//       const sum = arr[i] + arr[j];
//       if (sum === value) {
//         // add two element to the array
//         arrElement.splice(0, 0, arr[i], arr[j]);
//         return arrElement;
//       }
//     }
//   }
//   return arrElement;
// }

function findSum(arr = [], value) {
  // create lookup table
  let elementTable = {};
  for (let i = 0; i < arr.length; i++) {
    elementTable[arr[i]] = arr[i];
  }
  let pair = [];

  for (let i = 0; i < arr.length; i++) {
    let remainder = null;
    value < 0 ? (remainder = value + arr[i]) : (remainder = value - arr[i]);
    if (elementTable[remainder] !== undefined) {
      pair.splice(0, 0, arr[i], remainder);
      return pair;
    }
  }
  return pair;
}

export { findSum };
