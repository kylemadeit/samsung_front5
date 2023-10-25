function work(callback) {
  console.log("work start!@!!");
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + "ms");

    callback();
  }, 0);

  //   console.log("work end!!");
}

console.log("작업 시작!");
work(() => {
  console.log("work end!!");
});
console.log("다음 작업");
