// O(nlogn)
// function mergeArray(arr1 = [], arr2 = []) {
//   const mergeArr = arr1.concat(arr2);
//   const sortMergeArray = mergeArr.sort((a, b) => a - b);
//   return sortMergeArray;
// }

// O(nlogn)
function mergeArray(arr1 = [], arr2 = []) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

// O(n+m)
// function mergeArray(arr1 = [], arr2 = []) {
//   let mergeArr = [];
//   let i = 0,
//     j = 0;

//   //compare array element and store the smallest one in the merge array
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       mergeArr.push(arr1[i]);
//       i++;
//     } else {
//       mergeArr.push(arr2[j]);
//       j++;
//     }
//   }
//   if (i <= arr1.length - 1) {
//     arr1.splice(0, i);
//     mergeArr = mergeArr.concat(arr1);
//   } else if (j <= arr2.length - 1) {
//     arr2.splice(0, j);
//     mergeArr = mergeArr.concat(arr2);
//   }
//   return mergeArr;
// }

export default mergeArray;
