function Shop() {
    this.construct = function(builder) {
        builder.step1();
        builder.step2();

        return builder.get();
    }
}

function CarBuilder() {
    this.car = null;

    this.step1 = function() {
        this.car = new Car();
    }

    this.step2 = function() {
        this.car.addDoors();
    }

    this.get = function() {
        return this.car;
    }
}

function TruckBuilder() {
    this.truck = null;

    this.step1 = function() {
        this.truck = new Truck();
    }

    this.step2 = function() {
        this.truck.addParts();
    }

    this.get = function() {
        return this.truck;
    }
}

function Car() {
    this.doors = 0;

    this.addDoors = function() {
        this.doors = 4;
    }
}

function Truck() {
    this.doors = 0;

    this.addParts = function() {
        this.doors = 2;
    }
}

const shop = new Shop();
const carBuilder = new CarBuilder();
const truckBuilder = new TruckBuilder();

const car = shop.construct(carBuilder);
const truck = shop.construct(truckBuilder);

console.log(car);
console.log(truck);