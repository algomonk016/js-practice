/*
Problem Statement:
Implement your custom version of the call method which sets the "this" context

Imagine you're working on improving your understanding of JavaScript's fundamental concepts, and you decide to implement your custom version of the `call` method, which sets the `this` context for a function.

The `call` method is a built-in method in JavaScript that allows you to invoke a function with a specified `this` context and optional arguments. Your task is to implement your custom version of this method, which achieves the same functionality.

Your custom `call` method should:

- Accept the context object (`thisArg`) as the first argument.
- Invoke the function with the specified `this` context.
- Pass any additional arguments to the function.
- Return the result of invoking the function with the specified `this` context and arguments.

Clarifications:

1: do we have to use customCall like
    myFun.customCall(thisArg, ...remaining arguments)
    or customCall(func, thisArg, ...remainingArguments)

   To make it simple, we'll be considering the second way, i.e passing the function as argument

2: do we need to handle the cases when fn or thisArg is not passed in arguments?

   we can consider that it'll be provided
*/

const obj1 = {
    name: "shivesh",
    sayName(companyName, meetingDate) {
        console.log(`Hey ${this.name}, welcome to ${companyName}. You'll have your first meeting on ${meetingDate}`);
    }
}

const obj2 = {
    name: "Shreya"
}

obj1.sayName("Quizizz", "Monday");
obj1.sayName.call(obj2, "Quizizz", "Monday");

Function.prototype.callPolyfill = function(context, ...args) {
    // return this.bind(context)(...args); 
    return this.apply(context, args); // better for this case because we want to invoke the method directly
    // we don't want that function to be invoked again with different arguments
    // what bind will do is, firstly it'll create a function, then we'll have to invoke it separately
}

obj1.sayName.callPolyfill(obj2, "Quizizz", "Tuesday");