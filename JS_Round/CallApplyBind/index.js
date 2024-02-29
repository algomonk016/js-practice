/**

The `call`, `apply`, and `bind` methods are all used to manipulate the `this` context of a function in JavaScript, but they have different ways of achieving this and different use cases:

1. **call**:
   - Syntax: `function.call(thisArg, arg1, arg2, ...)`
   - The `call` method is used to invoke a function with a specified `this` context and arguments passed individually.
   - It accepts the `this` context as the first argument, followed by additional arguments separated by commas.
   - Example:
     ```javascript
     function greet() {
         console.log(`Hello, ${this.name}!`);
     }

     const person = { name: 'John' };
     greet.call(person); // Output: Hello, John!
     ```

2. **apply**:
   - Syntax: `function.apply(thisArg, [argsArray])`
   - The `apply` method is similar to `call`, but it accepts the `this` context as the first argument and an array (or array-like object) of arguments as the second argument.
   - It is useful when the number of arguments to be passed to the function is not known in advance or is variable.
   - Example:
     ```javascript
     function greet() {
         console.log(`Hello, ${this.name}!`);
     }

     const person = { name: 'Alice' };
     const args = ['extra', 'arguments'];
     greet.apply(person, args); // Output: Hello, Alice!
     ```

3. **bind**:
   - Syntax: `function.bind(thisArg, arg1, arg2, ...)`
   - The `bind` method returns a new function with the specified `this` context, but it does not immediately invoke the function.
   - It is useful for creating a new function with a fixed `this` context that can be called later.
   - The `bind` method also allows partial application of arguments.
   - Example:
     ```javascript
     function greet() {
         console.log(`Hello, ${this.name}!`);
     }

     const person = { name: 'Emily' };
     const greetPerson = greet.bind(person);
     greetPerson(); // Output: Hello, Emily!
     ```

In summary, `call` and `apply` are used to invoke a function immediately with a specified `this` context and arguments, while `bind` is used to create a new function with a fixed `this` context, which can be invoked later.


*/