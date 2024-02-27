/*
Problem Statement:
		Implement a function that serializes a JS value into a JSON string

Requirements:
		- A function that works as JSON.stringify
		- first argument can be  any valid JavaScript data type (object, array, number, boolean)
		- second argument is an optional  replacer parameter which follows the same rules as in JSON.stringify
			and should be used to filter/transform properties of the object before they are serialized 
		- third argument is also an optional space parameter which specifies how many spaces should be used for indentation


Limitations of JSON serialization
		- limited data types
		- no support for comments
		- circular references will cause an error
		- doesn't support few OOP concepts like inheritance  
*/

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

const serialize = (value, replacer, spaceIndentation) => {
	if (["string", "number", "boolean"].includes(typeof value)) {
		return value;
	}

	if (value === undefined) {
		return "undefined";
	}

	if (value === null) {
		return "null";
	}

	if (value instanceof Date) {
		return new Date(value).toISOString();
	}

	// handles missed types, return undefined

	if (typeof value !== "object") {
		return undefined;
	}

	let result = Array.isArray(value) ? `[` : `{`;

	for (const key in value) {
		const val = value[key];
		const serializedValue = serialize(val, null, spaceIndentation);
		result += `"${key}":"${serializedValue}",`;
	}

	result = result.slice(0, -1); //  remove last comma

	result += Array.isArray(value) ? `]` : `}`;

	return result;
}


const serializedSimpleObject = serialize(simpleObject);
const serializedComplexObject = serialize(complexObject);

// console.log(serializedSimpleObject, JSON.stringify(simpleObject));
console.log(serializedComplexObject);

console.log("json.stringify");
console.log(JSON.stringify(complexObject));