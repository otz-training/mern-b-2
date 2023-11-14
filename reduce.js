/*
    - It reduces the array into single value
    - Originl array on which reduced is applied will remain unchanged.
    - arr.reduce(callback);
    - callback(prev:any ,curr:any,index:number,array:numer[])
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = arr.reduce(function (a, b) {
  return a + b;
}, 0);

console.log(sum);

let sumEven = arr.reduce(function (prev, curr) {
  return curr % 2 == 0 ? prev + curr : prev;
}, 0);
console.log(sumEven);

let max = arr.reduce(function (max, val) {
  return max > val ? max : (max = val);
}, 0);

console.log(max);

let persons = [
  { name: "Alok", age: 25 },
  { name: "Ravi", age: 30 },
  { name: "Bikash", age: 35 },
  { name: "Abinash", age: 25 },
];

[
  [
    { name: "Alok", age: 25 },
    { name: "Abinash", age: 25 },
  ],
  { name: "Ravi", age: 30 },
  { name: "Bikash", age: 35 },
];

let groupedPerson = persons.reduce(function (res, obj) {
  let key = obj["age"];
  if (!res[key]) {
    res[key] = [];
  }
  res[key].push(obj);
  return res;
}, {});

console.log(groupedPerson);

const alphabets = ["A", "B", "C", "D", "A", "A", "B", "C", "B"];
//Counte the occurences

const alphabet = alphabets.reduce(function (count, alphabet) {
  count[alphabet] = (count[alphabet] || 0) + 1;
  return count;
}, {});

console.log(alphabet);

// step-1 : count ={}
//          alphabet ='A'

//          count['A'] = 1

//          {'A':2,'B':1,'C':1,'D':1}

// step-2 :
const products = [
  { name: "Laptop", price: 50000, quantity: 2 },
  { name: "Phone", price: 10000, quantity: 4 },
  { name: "Tablet", price: 20000, quantity: 5 },
];

let totalPrice = products.reduce((total, obj) => {
  return (total = total + obj.price * obj.quantity);
}, 0);

console.log(totalPrice);
