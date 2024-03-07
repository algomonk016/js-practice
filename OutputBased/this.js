/**
 * ================== Question 1 ======================
 */

const object = {
    who: 'World',

    greet() {
        return `Hello, ${this.who}!`;
    },

    farewell: () => {
        return `Goodbye, ${this.who}!`;
    },
};

console.log(object.greet());
console.log(object.farewell());

/**
 * ================== Question 2 ======================
 */

const obj = {
    name: "Raj",
    greet: function() {
        makeGreet();
        function makeGreet() {
            console.log(this.name);
        }
    }
}

// output of the following function
obj.greet();
// undefined,
// why it's not working?
// because we aren't passing the context
// to fix this,
// makeGreet.call(this)