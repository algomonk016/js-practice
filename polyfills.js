const arr = [1, 2, 3, [7, 8, 9, [10, 11]], 4, 5, 6];
function callback(ele) {
  return ele * 3;
}

function filterCallback(ele) {
  return ele !== 3;
}

// console.log(arr.flat(2));

Array.prototype.myMap = function(callback) {
  const newArray = [];
  for(const i of this) {
    newArray.push(callback(i));
  }
  return newArray;
};

Array.prototype.myFilter = function(callback) {
  const filteredArray = [];
  for(const i of this) {
    if(callback(i)) {
      filteredArray.push(i);
    }
  }
  return filteredArray;
}

// function calls
// const filteredArray = arr.myFilter(filterCallback);
// const mappedArray = arr.myMap(callback);
