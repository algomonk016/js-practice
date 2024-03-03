### Iterator

The Iterator pattern allows clients to effectively loop over a collection of objects.

A common programming task is to traverse and manipulate a collection of objects. These collections may be stored as an array or perhaps something more complex, such as a tree or graph structure. In addition, you may need to access the items in the collection in a certain order, such as, front to back, back to front, depth first (as in tree searches), skip evenly numbered objects, etc.

The Iterator design pattern solves this problem by separating the collection of objects from the traversal of these objects by implementing a specialized iterator.

#### Example

The Iterator object maintains a reference to the collection and the current position. It also implements the 'standard' Iterator interface with methods like: first, next, hasNext, reset, and each.


```js

function Iterator(items) {
    this.index = 0;
    this.items = items;
}

Iterator.prototype = {
    // resets the index, and return 1st item
    first: function() {
        this.reset();
        return this.next();
    },
    // checks if `index` ke aage duniya bachi hai ya nahi
    hasNext: function() {
        return (this.index) <= this.items.length;
    },
    // returns next item
    next: function() {
        if(this.hasNext()) {
            return this.items[this.index++];
        }

        return undefined;
    },
    // reset iteration
    reset: function() {
        this.index = 0;
    },
    // iterate over the array, and do the callback
    each: function(callback) {
        for(let item = this.first(); this.hasNext(); item = this.next()) {
            callback(item);
        }
    }
}

const items = [1, 4, "shivesh", 4, 6,];

const iterator = new Iterator(items);
console.log(iterator.first());
console.log(iterator.next());

iterator.each((item) => console.log(item));

```