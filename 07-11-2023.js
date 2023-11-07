let a = Array.prototype.map.call("Hello World", function (x) {
  return x.charCodeAt(0);
});

console.log(a);

let num = [3, 25, 100];

let root = num.map((n) => Math.sqrt(n));
console.log(root);
let root1 = num.map((n) => Math.log10());
console.log(root1);

const tempInCelcius = [0, 10, 20, 30, 40];
// (c * 9/5)+32
const tempInFahrenheit = tempInCelcius.map((t) => (t * 9) / 5 + 32);
console.log(tempInFahrenheit);

const names = ["shatabdi", "jasmine", "Payal", "elley"];

const cNames = names.map((name) => {
  return name[0].toUpperCase() + name.slice(1);
});

console.log(cNames);

const students = [
  { sid: 1, name: "Rahul", email: "rahul@gmail.com", class: "x" },
  { sid: 2, name: "Rakesh", email: "rakesh@gmail.com", class: "x" },
  { sid: 3, name: "Rakul", email: "rakul@gmail.com", class: "ix" },
  { sid: 4, name: "Rajib", email: "rajib@gmail.com", class: "x" },
];

const emails = students.map((student) => student.email);
console.log(emails);

const employees = [
  { name: "Rahul", email: "rahul@gmail.com", class: "x" },
  { name: "Rakesh", email: "rakesh@gmail.com", class: "x" },
  { name: "Rakul", email: "rakul@gmail.com", class: "ix" },
  { name: "Rajib", email: "rajib@gmail.com", class: "x" },
];

const employeesWithID = employees.map((employee, index) => ({
  id: index + 1,
  name: employee.name,
  email: employee.email,
  phone: "9439914183",
  ...employee,
}));

console.log(employeesWithID);
