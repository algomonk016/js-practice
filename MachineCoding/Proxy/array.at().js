/*
Problem Statement:
    Implement negative indexing in Array using Proxies. 

Clarifications:
    - how to handle out of bound indexes?, maybe print error
*/

const array = [1, 2, 3, 4 , 5, 6];

const proxiedArray = new Proxy(array, {
    get(array, index, receiver) {
        const len = array.length;
        if( index >= len || index < -1*len) {
            console.log("out of bound");
        } else if(index >= 0) {
            const data = array[index];
            console.log(`element at ${index} is ${data}`);
        } else {
            const data = array[len + Number(index)];
            console.log(`element at ${index} is ${data}`);
        }

        return Reflect.get(array, index, receiver);
    },
    set(array, index, value, receiver) {
        const len = array.length;
        if( index >= len || index < -1*len) {
            console.log("out of bound");
        } else if(index >= 0) {
            index = array[index];
        } else {
            index = len + Number(index);
        }

        console.log("updating", index, value);
        return Reflect.set(array, index, value, receiver); 
    }
});

proxiedArray[-1]; // 6
proxiedArray[5]; // 6
proxiedArray[-4]; // 3
proxiedArray[10]; // OutOfBound

proxiedArray[-4] = 10;
proxiedArray[-4]; // 10