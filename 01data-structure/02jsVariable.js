// const
const a = 10;
// var functional scope
console.log("Var work as functional scope:");

function foo() {
  var n = 5;
  console.log(n);
}
var n = 4;
console.log(n);
foo();

var b = 10;
var b = 11;
console.log(b);

// let block scope
console.log("Let block scope");
function yoo(number) {
  if (number == 6) {
    var value = 2;
  }
  console.log(value);
}
var n = 20;
console.log(n);
yoo(6);

// let and var in loops

for (let i = 0; i < 10; i++) {
  console.log("i inside loop:", i);
}
// console.log("i outside loop:", i);

for (var index = 0; index < 10; index++) {
  console.log("index inside loop:", index);
}
console.log("index outside loop:", index);
