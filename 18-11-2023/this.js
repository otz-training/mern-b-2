// console.log(this);
// function test() {
//   console.log(this);
// }
// test();

let cat = {
  type: "Cat",
  sound: "Meow",
};

let dog = {
  type: "Dog",
  sound: "Bark",
};

const say = function (message) {
  console.log(message);
  console.log(this.type + " says " + this.sound);
};

say("hello");
say.call(cat, "What does a cat say?");
say.call(dog, "What does a dog say?");

say.apply(dog, ["What does a dog say?"]);

const sayForCat = say.bind(cat);
const sayForDog = say.bind(dog);
sayForCat("Abcde what cat says?");
sayForDog("What dog Says ?");
