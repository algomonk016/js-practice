/*
Problem Statement:
    - Write a function that mimics throttle functionality
    - throttle limits the execution of a function when the event is triggered continuously 

Requirements:
    - a function that takes two arguments, function to throttle and delay
    - it should return the throttled function, which will limit it's execution when triggered continuously
*/ 

function throttle(fn, delay = 500) {
	let timerId;
    let lastCallTime = 0;

	return function() {
        const currentTime = new Date().getTime();

        if(!lastCallTime || (currentTime - lastCallTime) >= delay) {
            fn.apply(this, arguments);
            lastCallTime = currentTime;
        } else {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                fn.apply(this, arguments);
                lastCallTime = currentTime;
            }, delay - (currentTime - lastCallTime));
        }
	}
}

function sayMyName(name) {
	console.log("name", name);
}

const throttledName = throttle(sayMyName, 1000);

throttledName("shivesh")
throttledName("shivesh")
throttledName("shivesh")
throttledName("shivesh")
throttledName("shivesh")
throttledName("shivesh")
throttledName("shivesh")