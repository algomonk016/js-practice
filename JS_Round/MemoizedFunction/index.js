/**
 * Problem Statement:
 * Describe a function, that when given another function as input, returns a new function 
 * that behaves exactly like the original one, but remembers the result of previous calls
 * 
 * Requirement:
 *  - Accept a single argument.
 *  - Store the results of previous calls based on the arguments used
 *  - If the same argument is passed again, return the previously calculated result instead of re-executing the original function.
 */

function memoize(fn) {
	const cache = {};
	return arg => {
		if(cache[arg] !== undefined) {
			console.log("cached");
			return cache[arg];
		}

		const result = fn(arg);
		cache[arg] = result;
		return result;
	}
}

function calculate(a) {
	return a * 100;
}

const memoizedFunction = memoize(calculate);

console.log(memoizedFunction(2));
console.log(memoizedFunction(3));
console.log(memoizedFunction(2));

