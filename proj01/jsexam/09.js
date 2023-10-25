const numbers = {
  _a: 1,
  _b: 2,
  get sum() {
    console.log("sum 함수 실행");
    return this.a + this.b;
  },
  get a() {
    console.log("get a() run");
    return this._a;
  },
};

console.log(numbers.sum);

console.log(numbers.a);
