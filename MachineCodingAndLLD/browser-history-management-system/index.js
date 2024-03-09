function BrowserHistory() {
  this.history = [];
  this.currentIndex = -1;
  this.skipDomains = []; // domains that we want to skip

  // visit
  this.visit = function(url) {
    this.history[++this.currentIndex] = url;
    this.history.length = this.currentIndex + 1;
  }

  this.goBack = function(steps = 1) {
    this.currentIndex = Math.max(
      -1, // home page
      this.currentIndex - steps
    )
  }

  this.goForward = function(steps = 1) {
    this.currentIndex = Math.min(
      this.currentIndex + steps, 
      this.history.length - 1
    );
  }

  this.clearHistory = function() {
    this.currentIndex = -1;
    this.history.length = 0;
  }

  /*
    @method
    @returns current url
  */ 
  this.current = function() {
    if(this.currentIndex < 0) {
      console.log("home page");
      return "HomePage";
    }
    
    console.log(this.history[this.currentIndex]);
    return this.history[this.currentIndex];
  }
}

const bh = new BrowserHistory();

bh.current(); // Homepage

bh.visit("website 1");
bh.current(); // website 1
bh.visit("website 2");
bh.visit("website 3");
bh.visit("website 4");
bh.current(); // website 4

bh.goBack(2);
bh.current(); // website 2
bh.goBack(4);
bh.current(); // home page
bh.goForward(4);
bh.current(); // website 4

bh.clearHistory();
bh.current(); // home page