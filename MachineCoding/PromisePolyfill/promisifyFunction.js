/*
    Problem Statement

    Imagine you're working with a codebase that heavily utilizes callback-style asynchronous functions. 
    To modernize the code and make it more manageable, you decide to implement a utility function called promisify.

    The promisify function should take a callback-style asynchronous function as input and return a new function that returns a promise. 
    This new function should call the original asynchronous function and resolve or reject the promise based on the success or failure of the original function's callback.

    However, there's a twist! You want to allow the original function to override the return value of the promise if needed. 
    This means that the original function should have the ability to directly resolve or reject the promise returned by the promisified function, instead of relying solely on its callback.

    Your task is to implement the promisify function according to these requirements. 
    The function should be flexible enough to work with any callback-style asynchronous function and allow the original function to control the return value of the promise.

    approach:
        hum promisify karne ke baad jb call kar rahe to sirf argument pass kar rahe, callback nahi
        to fn.apply mein apna khud ka callback daal diye
*/


function asyncFun(index, callback) {
    setTimeout(() => {
        console.log("called async function", index);
        callback(null, "callback resolve: " + index);
    }, 500);
}

function asyncFunFail(index, callback) {
    setTimeout(() => {
        console.log("called async function", index);
        callback("callback reject: " + index, null);
    }, 500);
}

function promisify(fn) {
    return function() {
        const args = arguments;
        const context = this;
        return new Promise((resolve, reject) => {
            fn.apply(context, [...args, (error, result) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }]);
        })
    }
}

const promisified = promisify(asyncFun);
const promisifiedReject = promisify(asyncFunFail);

promisified(1)
    .then(res => {
        console.log("ppp ", res);
    })

promisifiedReject(2)
    .then((res) => console.log(res))
    .catch(error => console.log(error));