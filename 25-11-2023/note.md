## Objects and Prototypes :

- An object is a collection of key/value pairs or properties

- let Book = {
  bookName:'Java',
  price :500,
  show : function(){
  console.log(`[BookName:${this.bookName} ,Price:${this.price}`);
  }
  }

- Constructor Function :

  It is a regular function with following convention

  1.  The name starts with Uppercase
  2.  Shuld be called using new operator

  function Book(bookName,price){
  this.bookName = bookName;
  this.price = price;
  }

  let book1 = new Book("Java",500);
  let book2 = new Book("C++",400);

  # calling a constructor function without new keyword

  function Book(bookName,price){
  this.bookName = bookName;
  this.price = price;
  }

  let b = Book("Php",500);

28-11-2023 :

-Object
-Constructor Function
-Prototype
-prototype Linkage
**proto**

- ## Prototypal Inheritance :

  let Person ={
  name:"Alok",
  greet:functon(){
  return "Hi,I'm"+this.name ;
  }
  };

  console.log(Person.\_ _ proto_ \_);
  console.log(Person.proto === Object.prototype);
