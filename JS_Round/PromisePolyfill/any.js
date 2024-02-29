/**
 * Problem Statement:
 *  Implement Promise.any method that takes an array of promises as input
 *  This method fulfills as soon as any of the provided promises fulfills, 
 *  returning the resolved value of the first settled promise. 
 *  However, if all promises reject, 
 *   - it rejects with an AggregateError containing all the rejection reasons.
 * 
 * Requirements:
 * - the polyfill should take an array of promises as input
 * - it should return a new promise with the first resolved value
 * - return aggregate error if all promises fail
 */

function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const errors = [];
    let settledCount = 0;

    // Iterate over each promise
    promises.forEach(promise => {
      promise()
        .then(res => {
          resolve(res); // Resolve with the first resolved value
        })
        .catch(err => {
          errors.push(err); // Collect rejection reasons
        })
        .finally(() => {
          settledCount++;
          if (settledCount === promises.length && errors.length === promises.length) {
            // If all promises reject, reject with an AggregateError containing all rejection reasons
            reject(new AggregateError(errors));
          }
        });
    });
  });
}



async function checkCustomPromiseAll() {
	const promises = getPromisesArray();
	const response = await customPromiseAll(promises);
	console.log('Response from customPromiseAny', response);
}

function getPromisesArray() {
	const promise1 = () => new Promise((res, rej) => {
		setTimeout(()=>{ rej(10) }, 500);
	})
	const promise2 = () => new Promise((res, rej) => {
		setTimeout(()=>{ rej(40) }, 500);
	})
	const promise3 = () => new Promise((res, rej) => {
		setTimeout(()=>{ rej("man nahi") }, 500);
	})

	const promiseArray = [
		promise1, promise2, promise3
	];

	return promiseArray;
}

checkCustomPromiseAll();