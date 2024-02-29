// sum(2)(5)(10)() should return 17

function sum(a) {
    let currSum = a;
    return function(b) {
        if(!b) return currSum;
        currSum += b;
        return sum(currSum);
    }
}

console.log(sum(2)(5)(10)());