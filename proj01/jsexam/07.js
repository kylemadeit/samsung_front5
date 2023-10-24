const dog = {
  name: "멍멍이",
  age: 2,
};

console.log(dog.name);
console.log(dog["name"]);

const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨",
};

const captainAmerica = {
  name: "스티븐 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 아메리카",
};

console.log(ironMan);
console.log(captainAmerica);

console.log(captainAmerica.actor);

function print(hero) {
  console.log(
    `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`
  );
}

print(ironMan);
print(captainAmerica);

function print(hero) {
  const { name, actor, alias } = hero; //객체 구조분해 할당!!

  //   const n = hero.name;
  //   const a = hero.actor;
  //   const ali = hero.alias;
  console.log(`${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`);
}

function print({ name, actor, alias }) {
  console.log(`${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`);
}
