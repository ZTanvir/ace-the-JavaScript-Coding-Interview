// O(n)
function rightRotate(arr = [], n) {
  const result = [];
  let arrIndex = 0;
  console.log("result", "array");

  for (let i = n; i <= arr.length; i++) {
    if (i === arr.length) {
      i = 0;
    }
    // successfully copy all items from arr to result
    if (result[i] !== undefined && arr.length === result.length) {
      break;
    }
    result[i] = arr[arrIndex];

    arrIndex++;
  }
  return result;
}
export { rightRotate };
