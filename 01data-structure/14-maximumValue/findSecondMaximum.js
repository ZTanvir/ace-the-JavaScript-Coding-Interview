const findSecondMaximum = (arr = []) => {
  // sort elements highest to lowest
  //   O(logn)
  arr.sort((a, b) => b - a);
  // search for 2nd highest number
  // which is less than 1st highest number(element at index 0)
  //   O(n)
  for (let element of arr) {
    if (element < arr[0]) return element;
  }
  return null;
};

export { findSecondMaximum };
