hello();

//함수 호이스팅.
function hello() {
  console.log("hello");
}

//중복정의 가능..   나중에 정의된 함수가 사용!!
function hello() {
  console.log("hello carami~~~");
}

// func();  아직 func 가 정의되지 않았으므로 오류 일으킴!!

const func = function () {
  // 함수가 일급객체로 취급!!
  console.log("func hello!!");
};

func();

//화살표 함수
const func2 = () => {
  console.log("func2 hello!!!");
};

func2();

function hi(a) {
  return "hello" + a;
}

const hi2 = (a) => "hello" + a;

hi("carami");

hi2("carami22");

function sum(a, b) {
  return a + b;
}

const sum2 = (a, b) => a + b;

console.log(sum2(1, 3, 3, 4, 4));
