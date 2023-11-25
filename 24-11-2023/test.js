// function greeting() {
//   let message = "Hi";
//   function sayHi() {
//     console.log(message);
//   }
//   return sayHi;
// }
// let hi = greeting();
// console.log(hi);
// hi();

// for (let index = 1; index <= 3; index++) {
//   setTimeout(function () {
//     console.log(" after " + index + " second(s): " + index);
//   }, index * 1000);
// }

for (var index = 1; index <= 3; index++) {
  (function (index) {
    setTimeout(function () {
      console.log(" after " + index + " second(s): " + index);
    }, index * 1000);
  })(index);
}
