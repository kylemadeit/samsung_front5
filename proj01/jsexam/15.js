//단축평가
// || && ??

const food = { foodName: "피자" };

function getFoodName(food) {
  if (!food) return "아무거나";
  return food.foodName;
}

console.log(getFoodName(food));

const food2 = { price: 2000 };
console.log(getFoodName(food2));

const food3 = "test";
console.log(getFoodName({}));

console.log(getFoodName(food3));

function getFoodName(food) {
  return food && food.foodName;
}

function getName(obj) {
  return obj || "객체없음";
}
console.log("=========================");
console.log(true || "hello");
console.log(false || "hello");

console.log("" || "hello");
console.log(0 || "hello");
console.log(null || "hello");
console.log(undefined || "hello");

console.log("a" || "hello");
console.log(1 || "hello");

console.log(false && "hello");
console.log(true && "hello");

let a;
let b = null;
let c = undefined;
let d = 4;
let e = "test";

let f = a || b || c || d || e;

console.log(f);
