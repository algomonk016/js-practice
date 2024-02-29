/*
Problem Statement:
    Your task is to implement the executeTasksInSeries function, 
    which takes an array of asynchronous tasks as input and executes them in series. 
    The function should execute each task one after the other, waiting for each task to complete before starting the next one.

Approach:
    - The executeTasksInSeries function takes an array of asynchronous tasks (tasks) as input.
    - It uses the reduce method to iterate over the tasks array.
    - Inside the reduce callback function:
        - It chains each task with the previous one using then(). 
        - This ensures that each task starts only after the previous one has completed.

        - The prevTask is the result of the previous task, and currTask is the current task being processed.
        
        - It returns a Promise that resolves when the current task (currTask) is completed.
    
    - The initial value for the reduce method is Promise.resolve(), which represents the completion of the first task in the array.
*/

function executeTasksInSeries(tasks) {
    return tasks.reduce((prevTask, currTask) => {
        return prevTask.then(() => {
            return currTask();
        })
    }, Promise.resolve());
}

const tasksToExecute = [asyncTask1, asyncTask2, asyncTask3];

executeTasksInSeries(tasksToExecute)
    .then(() => {
        console.log("All tasks completed");
    })
    .catch(error => {
        console.error("Error occurred:", error);
    });

/**
 * ================== Async Functions ======================
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