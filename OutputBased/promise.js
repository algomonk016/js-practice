/**
 * ================== Question 1 ======================
 */

const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});
promise.then((res) => {
  console.log(res);
});
console.log(4);

/**
 * ================== Question 2 ======================
 */

function fn() {
  return new Promise((resolve, reject) => {
      reject(10);
  })
}

fn()
.then(() => {
  console.log("success 1");
})
.then(() => {
  console.log("success 2");
})
.then(() => {
  console.log("success 3");
})
.catch(() => {
  console.log("error 1");
  return "Shirorororo";
})
.then((res) => {
  console.log("success 4", res)
})

// output, error 1, success 4
// the promise is rejected, so it'll directly go to `catch`
// the last `then` will be called for `catch` with res <- "Shirorororo"
// to make it more clear, convert it to try-catch block
