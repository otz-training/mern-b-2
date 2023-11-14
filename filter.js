const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const arrodd = arr.filter(function (e) {
  return e % 2 != 0;
});

console.log(arrodd);

if (arr.isArray()) {
  console.log(true);
} else {
  console.log(false);
}
