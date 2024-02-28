/*
Problem Statement:
    - Implement a class that can subscribe to and emit events that trigger attached callback functions
    - optional stuffs, can unsubscribe an event
    - can unsubscribe all events

Approach:
    Class <- EventEmitter

    events: { eventName: [methods] }
    methods:
        subscribe(eventName, callback): void;
        unsubscribe(eventName, callback): void;
        emit(eventName): void // it'll execute all the events
        unsubscribeAll(eventName)

Questions to ask:
    - do we need to show any alert if event is not subscribed?
    - can we assume that for a particular event, all the callbacks will accept similar arguments?
        - if not, how should we handle them?
*/

class EventEmitter {
    constructor() {
        this.events = {};
    }

    subscribe(eventName, callback) {
        if(!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);
    }

    emit(eventName, ...args) {
        if(!this.events[eventName]) {
            console.log("No Event found");
            return;
        }

        for(const callback of this.events[eventName]) {
            callback.apply(this, args);
        }
    }

    unsubscribe(eventName, callback) {
        if(!this.events[eventName]) {
            console.log("No Event found");
            return;
        }

        const callbackIndex = this.events[eventName].indexOf(callback);
        if(callbackIndex !== -1) {
            this.events[eventName].splice(callbackIndex, 1);
            console.log("deleted");
        }
    }

    unsubscribeAll(eventName) {
        if(this.events[eventName])
            delete this.events[eventName];
    }
}

function testEventEmitter() {
    const eventEmitter = new EventEmitter();

    eventEmitter.subscribe("name", callback1);
    eventEmitter.subscribe("name", callback2);
    eventEmitter.subscribe("hello", callback3);

    eventEmitter.emit("name", "shivesh", "tiwari");
    eventEmitter.unsubscribe("name", callback2);
    eventEmitter.emit("name", "shivesh", "tiwari");
}

const callback3 = () => {
    console.log("this is from callback 3");
}

const callback2 = (name, surname) => {
    console.log(`hey there callback 2 ${name} ${surname}`);
}

const callback1 = (name, surname) => {
    console.log(`hey there, ${name} ${surname}`);
}

testEventEmitter();