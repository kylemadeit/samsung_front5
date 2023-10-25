const named = "carami";

const userName = named || "guest";

console.log(userName);

console.log("==============");
//??  거짓을 판단하는 기준이 단지 값으로..
console.log(false ?? "hello");

console.log("" ?? "hello");
console.log(0 ?? "hello");
console.log(null ?? "hello");
console.log(undefined ?? "hello");

console.log("a" ?? "hello");
console.log(1 ?? "hello");
