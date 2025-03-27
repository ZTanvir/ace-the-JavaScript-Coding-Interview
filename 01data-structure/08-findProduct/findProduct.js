// O(n^2)
// function findProduct(arr = []) {
//   // O(n)
//   const result = [];
//   // O(n)
//   arr.forEach((item, i) => {
//     // find the products of all the items in the array
//     let product = 1;
//     for (let j = 0; j < arr.length; j++) {
//       if (i === j) {
//         continue;
//       }
//       product *= arr[j];
//     }
//     result.push(product);
//   });
//   return result;
// }
function findProduct(arr) {
  var result = [];
  var left = 1,
    currentproduct;
  //To store product of all previous values from currentIndex
  for (var i = 0; i < arr.length; i++) {
    currentproduct = 1;
    //To store current product for index i
    //compute product of values to the right of i index of list
    for (var j = i + 1; j < arr.length; j++) {
      currentproduct = currentproduct * arr[j];
    }
    //currentproduct * product of all values to the left of i index
    result.push(currentproduct * left);
    //Updating `left`
    left = left * arr[i];
  }
  return result;
}
export { findProduct };
