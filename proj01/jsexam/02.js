console.log("hello");

//변수
var v1 = 0; //ES6  --권장하지 않는다.   let (변수)  / const (상수)

console.log(v1);

//var 호이스팅
console.log(v2);

var v2 = 30;

// var 중복정의 가능
var v1 = 30;

console.log(v1);

//var scope  --  함수단위

function varScopeTest() {
  if (true) {
    var varScope = 20;
  }

  console.log(varScope);
}

varScopeTest();

console.log("======================let============");
//1. let 은 호이스팅이 일어나지 않는다.
// console.log(let1);

let let1 = 10;
let1 = 30;

//2. let은 중복정의 할 수 없다.
// let let1 = 20;

//3. let의 scope는 블록단위
function letScopeTest() {
  if (true) {
    let letScope = 10;
  }
  console.log(letScope);
}

// letScopeTest();

//const  호이스팅안됨. 중복정의 안됨. 블록스코프사용!!

const c1 = 10;

c1 = 20;

console.log(c1);
