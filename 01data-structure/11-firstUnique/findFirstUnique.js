// O(n^2)
// const findFirstUnique = (arr = []) => {
//   let count = 0;

//   for (let i of arr) {
//     for (let j of arr) {
//       if (i === j) {
//         count++;
//       }
//       if (count >= 2) {
//         break;
//       }
//     }
//     if (count === 1) {
//       return i;
//     }
//     count = 0;
//   }
//   return null;
// };

// O(n^2)
function findFirstUnique(arr = []) {
  for (let index = 0; index < arr.length; index++) {
    let index2 = 0;
    while (index2 < arr.length) {
      if (index != index2 && arr[index] === arr[index2]) {
        break;
      }
      index2++;
    }
    if (index2 == arr.length) {
      return arr[index];
    }
  }
  return null;
}
