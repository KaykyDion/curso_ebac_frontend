function Vehicle(vehicle, wheels, speed) {
  this.wheels = wheels;
  this.speed = speed;
  this.vehicle = vehicle;

  this.acelerar = function () {
    console.log(`${vehicle} acelerou!`);
  };
}

function Car(name, speed) {
  Vehicle.call(this, "Carro", 4, speed);

  this.name = name;
  this.speed = speed;

  this.acelerar = function () {
    console.log(`${this.vehicle} ${this.name} acelerou!`);
  };
}

function Motorcycle(name, speed) {
  Vehicle.call(this, "Moto", 2, speed);

  this.name = name;
  this.speed = speed;

  this.acelerar = function () {
    console.log(`${this.vehicle} ${this.name} acelerou!`);
  };
}

const siena = new Car("Siena", 180);
const civic = new Car("Civic", 200);
const cg = new Motorcycle("CG 160", 160);

console.log(siena);
console.log(civic);
console.log(cg);
cg.acelerar();
