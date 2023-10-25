const callFunc = () => {
  console.log("hello!!");
};

function work(callback) {
  setTimeout(() => {
    console.log("hi!!");

    callback();
  }, 0);
}

console.log("start");

// work(callFunc);

work(nextWork);
// work();
// nextWork();

function nextWork() {
  console.log("work 다음 할일!!");
}

console.log("end");
