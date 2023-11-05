// let arr = [10, 20, 30, 40];
// console.log("OriginalArray :" + arr);
// arr1 = ["A", "B", "C"];
// var x = arr.splice(arr.length, 0, arr1);
// console.log(x);
// console.log(arr);
// //Remove 1 element from index 1  and add 1,2,3
// arr2 = [12, 13, 14];
// arr3 = [15, 16, 17];
// arr5 = [80, 50, 90];
// arr4 = arr2.concat(arr3);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);
// arr6 = Array.prototype.concat(arr2, arr3, arr5);
// console.log(arr6);
// const arr1 = [3, 4, 5];

// const arr2 = arr1.map(function (a) {
//   return a * a;
// });
// console.log(arr1);
// console.log(arr2);

// function multiply(x, y) {
//   return x * y;
// }

// function callMultiply(fn, val1, val2) {
//   return fn(val1, val2);
// }

// let res = callMultiply(multiply, 40, 50);

// console.log(res);

// function callMultiply(v1, v2) {
//   return function () {
//     return v1 * v2;
//   };
// }

// let res = callMultiply(40, 50);
// console.log(res());
// console.log(callMultiply(2, 3)());

// function filter(numbers, callback) {
//   let results = [];
//   for (const number of numbers) {
//     if (callback(number)) {
//       results.push(number);
//     }
//   }
//   return results;
// }

// function findOdd(number) {
//   return number % 2 != 0;
// }

// function findEven(number) {
//   return number % 2 == 0;
// }
// let oddNumbers = filter(numbers, findOdd);
// let evenNumbers = filter(numbers, findEven);

// oddNumbers = filter(numbers, function (number) {
//   return number % 2 != 0;
// });

// oddNumbers = filter(numbers, (number) => number % 2 != 0);
// evenNumbers = filter(numbers, findEven);

// const arr2 = arr1.map(function (a) {
//   return a * a;
// });
// const arr9 = arr1.map((a) => a * a);
function mymap(arr, fn) {
  let results = [];
  for (const element of arr) {
    results.push(fn(element));
  }
  return results;
}
function sqr(num) {
  return num * num;
}
const arr12 = [2, 3, 4, 5];
const arr13 = mymap(arr12, function (e) {
  let n;
  if (e % 2 == 0) {
    n = e * e;
  } else {
    n = e * e * e;
  }
  return n;
  //   return e % 2 == 0 ? e * e : e * e * e;
});

const arr14 = mymap(arr12, (e) => (e % 2 == 0 ? e * e : e * e * e));
console.log(arr12);
console.log(arr13);

const arr15 = [10, 20, 30, 40, 50];
let [x, y, z, p, q] = arr15;
console.log(x);
console.log(y);
console.log(z);
console.log(p);
console.log(q);
let [a, ...arr16] = arr15;
console.log(x);
console.log(arr16);
