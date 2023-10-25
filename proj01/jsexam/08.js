const dog = {
  name: "봄봄",
  sound: "멍멍",
  say: function () {
    console.log(this.sound);
    console.log(this);
  },
  //   say2: () => {
  //     console.log(this.sound);
  //     console.log(this);
  //   },
};

dog.say();

dog.say2();
