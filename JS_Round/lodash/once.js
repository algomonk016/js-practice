/**
 * Problem Statement:
 * Implement `once` function of lodash
 * 
 * Requirement:
 * - it should take a function as an argument
 * - return the onced function, that'll run only once
 * - for further invokes, it'll return the result of the first invoke
 * 
 * let a = 2;
 * const add5(a) {
 *  return a + 5;
 * }
 * 
 * add5(a); // 7 <- 2 + 5
 * add5(a); // 17 <- 7 + 10
 * 
 * const oncedAdd5 = once(add5);
 * let a = 2;
 * oncedAdd5(a); // 7 <- 2 + 5
 * oncedAdd5(a); // 7, cached value
 * oncedAdd5(a); // 7, cached value
 * oncedAdd5(a); // 7, cached value
 */

function once(func) {
  let result;
  return function () {
    const cxt = this;
    const args = arguments;

    if (!result) {
      result = func.apply(cxt, args);
    }

    return result;
  }
}