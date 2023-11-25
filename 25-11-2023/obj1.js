// let Book1 = {
//   bookName: "Java",
//   price: 500,
//   show: function () {
//     console.log(`[BookName:${this.bookName} ,Price:${this.price}]`);
//   },
// };

// let Book2 = {
//   bookName: "C++",
//   price: 300,
//   show: function () {
//     console.log(`[BookName:${this.bookName} ,Price:${this.price}]`);
//   },
// };

// Book1.show();

function Book(bookName, price) {
  if (new.target) {
    this.bookName = bookName;
    this.price = price;
    this.show = function () {
      console.log(`[BookName:${this.bookName} ,Price:${this.price}]`);
    };
  } else {
    //throw Error("can not call without new Operator");
    return new Book(bookName, price);
  }
}

let book1 = new Book("Java", 500);
let book2 = new Book("C++", 400);
let book3 = new Book("C++", 400);
book1.show();
book2.show();
const arrBook = [book1, book2, book3];
for (let book of arrBook) {
  book.show();
}
let b = Book("Php", 500);
b.show();
