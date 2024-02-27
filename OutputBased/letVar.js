let arr = [0, 0, 0, 0, 0];

// for (var i = 0; i < arr.length - 1; i++) {
//   setTimeout(() => {
//       ++arr[i];
//       console.log(arr);
//   }, 10);  
// }

// for (let i = 0; i < arr.length - 1; i++) {
//   setTimeout(() => {
//       ++arr[i];
//       console.log(arr);
//   }, 10);  
// }

for(var i = 0; i < arr.length; i++) {
  const yo = function(i) {
    setTimeout(() => {
      console.log(arr);
       ++arr[i];
    }, 10);
  }
  
  yo(i);
}