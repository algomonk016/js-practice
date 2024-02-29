/**
 * Problem statement: Deep Copy
 *  given an object, write a function to deep copy the object
 * 
 * Requirements:
 *  - a function that takes the object as input and returns the copied object.
 *  - the object can be an array as well as JS object
 * 
 * Approach:
 *  - we'll iterate over the  properties of the object using for...in loop
 *  - and then recursively call the copying function on each property value  if it is also an object.
 */

function deepCopy(obj) {
	if(typeof obj !== "object") return obj;

	const newObj = Array.isArray(obj) ? [] : {};

	for(const key in obj) {
		const value = obj[key];
		
		// date
		if(value instanceof Date) {
			newObj[key] = new Date(value.getTime());
		} else if(typeof value === "object") {
			newObj[key] = deepCopy(value);
		} else {
			newObj[key] = value;
		}
	}

	return newObj;
}

const complexObject = {
	name: "shivesh",
	jobs: ["fyllo", "snarweb", "newrise technosys"],
	age: 25,
	mentors: {
		"mohit sir": "DSA and life",
		"ankit sir": "coolest manager, more like an elder brother"
	},
	date: new Date()
}

const simpleObject = {
	name: "shivesh"
}

const complexArray = [simpleObject, complexObject, complexObject.mentors];
const simpleArray = [1, 2, 3, 5];
const copyObject = deepCopy(complexObject);

console.log("runnig");

console.log(complexObject, copyObject);
copyObject.name = "shreya";
copyObject.jobs.push("google");
copyObject.mentors["akash sir"] = "best mentor";
console.log(complexObject, copyObject);
