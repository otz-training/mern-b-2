function Shape() {
    this.color = "red";
  }
  Shape.prototype.color = "red";
  Shape.prototype.getColor = function () {
    return this.color;
  };
  
  function Square(size) {
    this.size = size;
  }
  
  Shape.prototype.getSize = function () {
    return this.size;
  };
  
  Square.prototype = Object.create(Shape.prototype);
  Square.prototype.constructor = Square;
  
  let mySquare = new Square(5);
  
  console.log(mySquare.getColor());
  console.log(mySquare.getSize());
