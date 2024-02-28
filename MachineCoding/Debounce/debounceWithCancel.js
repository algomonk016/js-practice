/*
Problem statement:
    - your debounce function should come with a cancel method. 
    - This method should allow the user to cancel any delayed invocations of the debounced function.
*/

function debounce(fn, delay = 500) {
    let timerId;
    
    return {
        cancel() {
            if (timerId) {
                clearTimeout(timerId);
            }
        },
        debounced() {
            const cxt = this;
            const args = arguments;

            if (timerId) {
                clearTimeout(timerId);
            }
            timerId = setTimeout(() => {
                fn.apply(cxt, args);
            }, delay);
        }
    };
}

function sayMyName(name) {
    console.log(name);
}


const { cancel, debounced: debouncedName } = debounce(sayMyName, 500);

debouncedName("shivesh1");
debouncedName("shivesh2");
setTimeout(() => {
    debouncedName("shivesh3");
    cancel();
}, 1000);
debouncedName("shivesh4");
debouncedName("shivesh5");
// cancel();