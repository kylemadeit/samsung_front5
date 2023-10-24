let a = 10;
let b = "test";

let c = test; // let이 함수를 가리킬 수 있다...

//함수를 일급객체로 취급한다.

c();

function test() {
  console.log("test");
}

console.log(typeof c);
