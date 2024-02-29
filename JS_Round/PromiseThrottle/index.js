/*
Problem Statement:
Implement throttling of promises which throttles API requests to max limit. 

Imagine you're working on a project where you need to make API requests to a server, but you want to throttle these requests to a maximum limit to prevent overwhelming the server or exceeding rate limits. Your task is to implement throttling of promises, which ensures that no more than a certain number of promises are executed concurrently.

The throttling mechanism should work as follows:

- It should accept an array of promise-producing functions and a maximum concurrency limit as input.
- It should ensure that no more than the specified number of promises are in-flight at any given time.
- As promises complete, new promises should be started to maintain the maximum concurrency limit.
- The implementation should use native JavaScript promises and avoid external dependencies.


Approach:

    - We define a function `throttlePromises` that accepts an array of promise-producing functions (`promiseFuncs`) and a maximum concurrency limit (`maxConcurrency`)
    - We iterate over the `promiseFuncs1 array and start executing promises while ensuring that no more than `maxConcurrency` promises are running concurrently
    - As promises complete, we collect their results and resolve the main promise when all promises have completed.
*/


function throttlePromises(promiseFuncs, maxConcurrency) {
    return new Promise((resolve) => {
        let runningFuncs = 0; // funcs count running currently
        let invokedFuncs = 0; // index of promiseFuncs we are at
        const results = []; // result of each promise funcs

        for(let i = 0; i < Math.min(maxConcurrency, promiseFuncs.length); i++) {
            runNextFun();
        }

        function runNextFun() {
            // if all functions are invoked, no function is left to invoke
            if(invokedFuncs >= promiseFuncs.length) {
                // no running function
                if(runningFuncs === 0) {
                    resolve(results);
                }

                return;
            }

            const nextFun = promiseFuncs[invokedFuncs];

            // update the index and running functions
            invokedFuncs++;
            runningFuncs++;

            Promise.resolve(nextFun())
                .then(res => results.push(res))
                .catch(err => console.log(err))
                .finally(() => {
                    // function execution completed
                    runningFuncs--;
                    runNextFun();
                })

            if(runningFuncs < maxConcurrency) {
                runNextFun();
            }
        }

    });
}


const promiseFuncs = [
    () => new Promise(resolve => setTimeout(() => resolve(1), 1000)),
    () => new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    () => new Promise(resolve => setTimeout(() => resolve(3), 500)),
    () => new Promise(resolve => setTimeout(() => resolve(4), 1500))
];

throttlePromises(promiseFuncs, 2)
    .then(results => {
        console.log("all promises completed", results);
    })
    .catch(error => {
        console.log("Error", error);
    })