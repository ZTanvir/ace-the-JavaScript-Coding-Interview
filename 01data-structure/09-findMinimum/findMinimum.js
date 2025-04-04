// O(N)
// function findMinimum(arr = []) {
//   return Math.min(...arr);
// }

// O(N)
// function findMinimum(arr = []) {
//   let lowestNumber = arr[0];
// at every step compare lowest number with element
// if element is less than lowestNumber ,then change lowestNumber to element
//   arr.forEach((element) => {
//     if (element <= lowestNumber) {
//       lowestNumber = element;
//     }
//   });
//   return lowestNumber;
// }

// O(N)
// function findMinimum(arr = []) {
//   const copyArr = [...arr];
//   copyArr.sort((a, b) => a - b);
//   return copyArr[0];
// }
