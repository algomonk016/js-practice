/**
 * ================== Question 1 ======================
 */
let arr1 = [5, 8]
for(let i = 0; i < 2; i++) {
  setTimeout(() => console.log(arr1[i]), 100);
}

for(var i = 0; i < 2; i++) {
  setTimeout(() => console.log(arr1[i]), 100); 
}

/**
 * ================== Question 2 ======================
 */
let arr = [0, 0, 0, 0, 0];

// variation 1
for (var i = 0; i < arr.length - 1; i++) {
  setTimeout(() => {
      ++arr[i];
      console.log(arr);
  }, 10);  
}

// variation 2
for (let i = 0; i < arr.length - 1; i++) {
  setTimeout(() => {
      ++arr[i];
      console.log(arr);
  }, 10);  
}

// fix variation 1, without `let`
for(var i = 0; i < arr.length; i++) {
  const yo = function(i) {
    setTimeout(() => {
      console.log(arr);
       ++arr[i];
    }, 10);
  }
  
  yo(i);
}