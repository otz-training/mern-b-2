const arr = [10, 20, 30, 40, 50];

console.log(arr);
console.log(arr[0]);
console.log(arr[arr.length]); // undefined
console.log(arr[arr.length - 1]); // 50

for (let i = 0; i < arr.length; i++) {
  console.log("arr[" + i + "]=" + arr[i]);
  //String Literal / Template Literal /Template Strings
  console.log(`arr[${i}]=${arr[i]}`);
}
console.log("---------------FOR-IN LOOP-----------------");
for (let i in arr) {
  console.log(arr[i]);
}
console.log("---------------FOR-OF LOOP-----------------");
for (let i of arr) {
  console.log(i);
}
console.log(
  "---------------FOREACH LOOP USING NORMAL CALLBACK FUNCTION-----------------"
);
arr.forEach(function (i) {
  console.log(i);
});

console.log(
  "---------------FOREACH LOOP USING ARROW CALLBACK FUNCTION-----------------"
);

arr.forEach((i) => console.log(i));

console.log("---------------COPY AN ARRAY-----------------");

const arr1 = [10, 20, 30];
const arr2 = Array.from(arr1);
arr2[0] = 90;
console.log(arr1);
console.log(arr2);

console.log("---------------SLICE-----------------");

const arr5 = [1, 2, 3, 4];
const arr6 = arr5.slice();
const arr7 = arr5.slice(1);
const arr8 = arr5.slice(1, 3);
const arr9 = arr5.slice(0, -2);

console.log(arr5); //[1,2,3,4]
console.log(arr6); //[1,2,3,4]
console.log(arr7); //[2,3,4]
console.log(arr8); //[2,3]
console.log(arr9); //[1,2]
