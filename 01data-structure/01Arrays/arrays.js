let userNames = ["a", "b", "c"];
console.log("Name:", userNames);

// push O*1)
// add elements to the end of an array
let numbers = [1, 2, 3, 4];
let n = numbers.push(5);
console.log("push method", n, numbers);

// pop O(1)
// remove an element from the last index of an array
let integerNumber = [1, 2, 3, 4, 5];
let i = integerNumber.pop();
console.log("pop mehtod", i, integerNumber);

// shift O(n)
// remove the 1st element from an array
const programmingLanguage = ["java", "python", "ruby"];
let a = programmingLanguage.shift();
console.log("shift", a, programmingLanguage);

// unshift O(n)
// add an item at the first index
const language = ["bangla", "hindi", "english"];
const l = language.unshift("urdu");
console.log("unshift", l, language);

// slice O(n)
// create subarray from start upto end
const fruits = ["apple", "banana", "cherry"];
const sliceFruits = fruits.slice(0, 2);
console.log("slice", sliceFruits, fruits);

// splice O(n)
// remove item at specified index
// also add item at specific index
const city = ["Dhaka", "karachi", "california"];
city.splice(1, 1);
console.log("splice", city);
city.splice(1, 0, "berlin", "paris");
console.log("splice", city);

// concat O(n+m)
// add 2 array and return a new array
let item1 = [1, 2, 3];
let item2 = [4, 5, 6];
let item = item1.concat(item2);
console.log("concat", item);

// for.. of
// O(n)
let poems = ["In", "JavaScript", "the", "JS", "engine"];
for (let word of poems) {
  console.log(word);
}
