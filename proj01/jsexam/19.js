function work() {
  const start = Date.now();
  for (let i = 0; i < 1000000000; i++) {}
  const end = Date.now();
  console.log(end - start + "ms");
}

// work();
// console.log("다음 작업");

function hi() {
  console.log("hello");
}
setTimeout(hi, 0);

console.log("hi 다음 할일!!");

console.log("hi 다음 할일!!");
console.log("hi 다음 할일!!");
console.log("hi 다음 할일!!");
console.log("hi 다음 할일!!");
