### Builder Pattern

We use builder pattern to make complex objects in a simpler way
for this, we introduce a builder class/method, which we'll use to make the object of Director method/class

#### Participants
- The main class/method is called the `Director`
- The `Builder` will have setter methods, getter is optional
The final objects are called `Products`
- `ConcreteBuilder`: CarBuilder, TruckBuilder

#### Setter Functions
- we can separate the initialization of different properties of the main class in different setter functions
- this will help us to know what exactly are we doing using that setter function, even after a year

```js 
const person = new Person("Shivesh", 10, 20, 3, "male"); 
```

- in this case, at the point of object creation we don't know what are the 2nd, 3rd and 4th arguments are used for
    we'll have to go to the method definition to know about it

```js
const person = new PersonBuilder("Shivesh", "male")
                    .setDOB(3, 10)
                    .setWeight(20)
                    .build();
```
- in this case we used a builder class to build the object of Director class,
- with the help of setter methods, we know what we are exactly doing

- Setter functions can have the complex logic, multiple steps, 
data conversion that we may do for the building Product


#### Car example

In the following example, we are building a `Cars` product
For this, we've introduced a builder class, `CarBuilder` and `Shop`
that assembles the car in multiple steps

The Shop construct can be used to various products that require two steps for building it, let's say, `Bike` or `Truck`

To make it more vehicle specific, we can add methods like
`createVehicleChasis`, `addEngine`, `addHorn`, `addBrake` in the vehicle specific classes,
then they can be used in different steps while building the vehicle

```js

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

function Car() {
    this.doors = 0;

    this.addDoors = function() {
        this.doors = 4;
    }
}

```

```js
const shop = new Shop();
const carBuilder = new CarBuilder();
const car = Shop.construct(carBuilder);
```

### Non Builder Way
suppose, we think that these steps are waste of time, and we don't want to use this

Now, this'll be only used for Car, we'll need to create different classes for different Vehicles, that'll create duplicacy

```js

function Car() {
    this.car = null;

    this.createChasis = function(carType){}
    this.addDoors = function(){} // based on carType, sportsCar: 2, 5-seater: 4, 7-seater: 5
    this.addBrakes = function(breakType) {}
}

```