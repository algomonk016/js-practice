function Shipping() {
    this.company = {};
}

Shipping.prototype = {
    setStrategy: function(company) {
        this.company = company;
    },
    calculate: function(package) {
        return this.company.calculate(package);
    }
}

const DTDC = function() {
    this.calculate = function(package) {
        return 10 * package.weight;
    }
}

const Post = function() {
    this.calculate = function(package) {
        return 2 * package.weight;
    }
}

const SpeedPost = function() {
    this.calculate = function(package) {
        return 4 * package.weight;
    }
}

function run() {
    const package = { weight: 10 };

    const shipping = new Shipping();
    const dtdc = new DTDC();
    const speedPost = new SpeedPost();
    const post = new Post();

    // price using DTDC
    shipping.setStrategy(dtdc);
    const priceDTDC = shipping.calculate(package);

    // price using speed post 
    shipping.setStrategy(speedPost);
    const priceSpeedPost = shipping.calculate(package);

    // price using Post
    shipping.setStrategy(post);
    const pricePost = shipping.calculate(package);

    console.log(priceDTDC, pricePost, priceSpeedPost);
}

run();