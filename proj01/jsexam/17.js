let oldName = "송아지";
let newName = "송수한";

if (oldName) {
  oldName = newName;
}

oldName && (oldName = newName);

oldName &&= newName;

const persone = { age: 30 };

persone.age ||= 21; //이미 age라는 속성이 존재한다면 무시..  없다면 추가

persone.name ??= "carami";

console.log(persone);

function makeObj(obj) {
  obj.name ??= "guest";
  obj.age ??= 20;
  return obj;
}

console.log(makeObj({}));
console.log(makeObj({ name: "carami" }));
console.log(makeObj(persone));
