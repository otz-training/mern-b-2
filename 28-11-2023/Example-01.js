let Person = {
  name: "Alok",
  greet: function () {
    return "Hi,I'm" + this.name;
  },
};

let Teacher = {
  teach: function (subject) {
    return "I can teach " + subject;
  },
};

Teacher.__proto__ = Person;

console.log(Person.__proto__);
console.log(Person.__proto__ === Object.prototype);

console.log(Teacher.greet());
console.log(Teacher.teach("C++"));
