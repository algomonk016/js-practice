/*
Imagine you're working on a project where you need to perform a series of transformations on some data. To make the code more modular and easier to manage, you decide to implement a pipe function.

The pipe function should take an arbitrary number of functions as arguments and return a new function that chains these functions together. When the new function is called with an input, it should pass the input through each of the chained functions in sequence, with the output of each function becoming the input of the next function.

Your task is to implement the pipe function according to these requirements. The function should be flexible enough to work with any number of functions and allow chaining them together to perform a series of transformations on data.

Clarification:
    let's take an example of a calculator function
    that takes add, subtract, multiply and divide as an argument to be piped
    then we can use Calculator(5).add(10).add(5).subtract(5)
    something like that?

Yes. Just like this
*/

function Calculator(initialValue = 0) {
    let result = initialValue;

    return {
        add(...value) {
            result = result + value.reduce((sum, curr) => curr + sum, 0);
            return this;
        },
        subtract(value) {
            result -= value;
            return this;
        },
        multiply(value) {
            result *= value;
            return this;
        },
        value() {
            return result;
        }
    }
}

const value = Calculator()
                    .add(5, 10, 20)
                    .add(10)
                    .subtract(10)
                    .value();

console.log("value", value);