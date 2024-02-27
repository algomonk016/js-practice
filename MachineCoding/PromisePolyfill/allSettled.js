/**
 * Problem Statement:
 * One functionality we'd like to implement is Promise.allSettled, 
 * which is not yet universally supported. 
 * Your task is to create a polyfill for this method.
 * 
 * Requirements:
 * It should take an array of Promises as input
 * should return a new promise that resolves to an array of objects
 * each object should have following properties
 *  - status: "fulfilled" | "rejected"
 *  - value: resolved value
 *  - reason: for being rejected (if rejected)
 * 
 * Approach:
 *  - firstly, check if Promise.allSettled is present or not
 *  - if not
 *		- implement the logic for Promise.allSettled
 * 		- we'll iterate over the array of promises
 * 		- we'll also maintain an array of objects that'll be our answer
 */

function customAllSettled(promises) {
	return new Promise((res) => {
		const results = [];

		for(const promise of promises) {
			const tempResult = {};
			promise()
				.then(res => {
					tempResult.status = "fulfilled";
					tempResult.value = res;
				})
				.catch(e => {
					tempResult.status = "rejected";
					tempResult.reason = e;
				})
				.finally(() => {
					results.push(tempResult);
					if(results.length === promises.length) {
						res(results);
					}
				})
		}
	})
}

async function checkCustomAllSettled() {
	const promiseArray = getPromisesArray();
	const [res1, res2, res3] = await customAllSettled(promiseArray);
	console.log(res1, res2, res3);
}

checkCustomAllSettled();

function getPromisesArray() {

	const promise1 = () => new Promise((res, rej) => {
		setTimeout(()=>{ res(10) }, 500);
	})
	const promise2 = () => new Promise((res, rej) => {
		setTimeout(()=>{ res(40) }, 500);
	})
	const promise3 = () => new Promise((res, rej) => {
		setTimeout(()=>{ rej("man nahi") }, 500);
	})

	const promiseArray = [
		promise1, promise2, promise3
	];

	return promiseArray;
}