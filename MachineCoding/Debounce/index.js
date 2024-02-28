/**
 * Problem Statement:
 * - Implement a function that takes a function and a number (delay) as input and return the debounced function
 * 
 * Approach:
 * 	- make a function named debounce, that'll take two arguments
 * 		- function to be debounced
 * 		- delay
 *  - debounce function will use concept of closure to return the debounced function
 *  - maintain a variable to store the unique id of the timeout
 *  - if timeout is defined, then clear the timeout, that'll eventually stop the debounced function call
 *  - create a new timeout with defined delay which will call the target function
 */

function debounce(fn, delay = 500) {
	let timer;
	return function() {
		if(timer) {
			clearTimeout(timer);
		}

		const context = this;

		timer = setTimeout(() => {
			fn.apply(context, arguments);
		}, delay);
	}
}

function sayMyName(name) {
	console.log("name", name);
}

const debouncedName = debounce(sayMyName, 1000);

debouncedName("shivesh")
debouncedName("shivesh")
debouncedName("shivesh")
debouncedName("shivesh")
debouncedName("shivesh")
debouncedName("shivesh")
debouncedName("shivesh")