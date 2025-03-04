// export function removeEven(arr = []) {
//   let oddNumbers = [];
//   for (let number of arr) {
//     if (number % 2 !== 0) {
//       oddNumbers.push(number);
//     }
//   }
//   return oddNumbers;
// }
// refactor removeEven
export function removeEven(arr = []) {
  let oddNumbers = arr.filter((element) => element % 2 !== 0);
  return oddNumbers;
}
