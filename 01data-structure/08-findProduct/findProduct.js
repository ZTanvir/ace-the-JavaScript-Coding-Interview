// O(n ^ 2);
function findProduct(arr = []) {
  // O(n)
  const result = [];
  // O(n)
  arr.forEach((item, i) => {
    // find the products of all the items in the array
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }
      product *= arr[j];
    }
    result.push(product);
  });
  return result;
}

export { findProduct };
