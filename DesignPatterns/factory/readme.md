### Factory Method

The factory method is a design pattern used in JS to create objects without specifying the exact class of the object that will be created.

Instead of calling constructor directly to create an object, it defines an interface for creating objects and allows subclasses to alter the type of objects.

#### Pro
The factory pattern is useful when we have to create multiple smaller objects that share the same properties. A factory function can easily return a custom object depending on the current environment, or user-specific configuration.

#### Cons
In JavaScript, the factory pattern isn’t much more than a function that returns an object without using the new keyword. ES6 arrow functions allow us to create small factory functions that implicitly return an object each time.

However, in many cases it may be more memory efficient to create new instances instead of new objects each time.

#### Example

```js

function Developer(name) {
    this.name = name;
    this.type = "developer";
}

function Tester(name) {
    this.name = name;
    this.type = "tester";
}

function EmployeeFactory() {
    this.create = function(name, type) {
        switch(type) {
            case 1:
                return new Developer(name);
                break;
            case 2:
                return new Tester(name);
                break;
        }
    }
}

function say() {
    console.log(`Hi, I'm ${this.name}, and I am a ${this.type}`);
}

const emp1 = new EmployeeFactory().create("shivesh", 1);
say.call(emp1);

```