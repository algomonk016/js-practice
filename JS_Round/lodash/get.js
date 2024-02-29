/*
The _.get method in lodash is a utility function that retrieves the value of a property at the given key path of an object. It allows you to safely access nested properties of an object without worrying about null or undefined values along the path.

_.get(object, path, [defaultValue])

example:
Access nested properties safely
_.get(obj, 'user.name'); // Output: 'John'
_.get(obj, 'user.address.city'); // Output: 'New York'

Handle non-existent paths
_.get(obj, 'user.age'); // Output: undefined
_.get(obj, 'user.age', 'N/A'); // Output: 'N/A' (default value specified)

Handle null or undefined values
const newObj = {
  user: null
};
_.get(newObj, 'user.name'); // Output: undefined

Approach:
    - we can firstly, split the path at `.`
    - by this, we'll have an array of the keys
    - iterate over the keys, and get the values respectively
    - maintain a currentObject, that'll store the value of the last received key
    - the currentObject will help us know where we stand
*/

const obj = {
    user: {
        name: 'John',
        address: {
            city: 'New York',
            zipcode: '10001'
        }
    }
};

function get(obj = {}, pathString, defaultValue) {
    let currObj = obj;
    const paths = pathString.split(".");

    const NO_DATA = defaultValue ?? undefined;

    for(const path of paths) {
        // key not found
        // null/undefined value
        if(!currObj.hasOwnProperty(path) || currObj[path] === null || currObj[path] === undefined) {
            return NO_DATA;
        }

        currObj = currObj[path];
    }

    return currObj;
}

console.log(get(obj, "user.address.city"));
console.log(get(obj, "user.addess.city"));
console.log(get(obj, "user.addess.city", "BHKK"));
console.log(get(obj, "user.address"));