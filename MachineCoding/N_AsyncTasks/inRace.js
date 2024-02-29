/*
The remaining tasks (asyncTask1 and asyncTask2) will still continue their execution, but their completion will not affect the outcome of the overall Promise 
because Promise.race() has already resolved with the result of the first completed task.
*/

function executeTasksInRace(tasks) {
    return Promise.race(tasks.map(task => task()));
}

const tasksToExecute = [asyncTask1, asyncTask2, asyncTask3];

executeTasksInRace(tasksToExecute)
    .then(() => {
        console.log("All tasks completed");
    })
    .catch(error => {
        console.error("Error occurred:", error);
    });

/**
 * ================== Async Taks ======================
 */

function asyncTask1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Async Task 1 completed");
            resolve();
        }, 1500);
    });
}

function asyncTask2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Async Task 2 completed");
            resolve();
        }, 500);
    });
}

function asyncTask3() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Async Task 3 completed");
            resolve();
        }, 10);
    });
}