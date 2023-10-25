const array = [];

console.log(typeof array);

array[0] = 0;
array[1] = "test";

console.log(array);
console.log(array[0]);

const array2 = new Array(0, "test");

const array3 = new Array(10);

console.log(array2);

console.log(array3);

array.push(function () {
  console.log("hahaha");
});
array.push(() => console.log("hello~~  array!!"));

console.log(array[2]);
array[2]();

//배열비구조할당.

// let [a, b, c, d] = array;

let a = array[0];
let b = array[1];
let c = array[2];
let d = array[3];

d();

const captainAmerica = {
  name: "스티븐 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 아메리카",
};

// const { alias,name } = captainAmerica;
const alias = captainAmerica.alias;
const name = captainAmerica.name;

console.log(alias);
