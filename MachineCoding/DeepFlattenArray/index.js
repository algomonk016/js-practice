/**
 * Problem Statement:
 * Given a multi-dimensional array and a number X, 
 * flatten the array till number X
 * 
 * Requirements:
 * 	- a function takes two arguments, 
 * 			- the multi-dimensional array 
 *  		- target depth
 * 			- current depth
 *  - returns an flatten array till target depth
 * 
 * Approach:
 * 	- we'll iterate over the array, maintain the depth at which we are, and try to flatten it
 *  - to do so, we'll maintain our result array and concatenate the flatten array in it
 */

function flattenArray(array = [], targetDepth, currentDepth = 1) {
	if(currentDepth >= targetDepth) return array;

	let result = array.reduce((acc, curr) => {
		// if the element is not an array
		if(!Array.isArray(curr)) {
			return acc.concat(curr);
		} else {
			return acc.concat(flattenArray(curr, targetDepth, currentDepth + 1));
		}
	}, []);

	return result;
}

const arr = [
	[1,2],
	3, 
	4,
	[5, 
		[6, 
			7, 
			[8, 9]
		]
	],
	[10, 
		[11, 12]
	]
]

const flattedArray = flattenArray(arr, 2);
console.log(flattedArray);