function Vehicle(type) {
  this.type = type;
}
Vehicle.prototype.start = function () {
  console.log("Starting the " + this.type);
};

function Car(type, brand) {
  Vehicle.call(this, type);
  this.brand = brand;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.drive = function () {
  console.log("Driving the " + this.brand + " car");
};

function ElectricCar(type, brand, powerSouce) {
  Car.call(this, type, brand);
  this.powerSouce = powerSouce;
}

ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;
ElectricCar.prototype.charge = function () {
  console.log("Chargnig the Electric car");
};

let myElectricCar = new ElectricCar("Mini", "Tesla", "eletric");
myElectricCar.start();
myElectricCar.drive();
myElectricCar.charge();
