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