function add(a) {
  console.log("a");
  return a;
}

function add(a, b) {
  console.log("a,b");
  return a + b;
}

add(4);

add(2, 3);

add(2, 3, 4, 5, 4);

function add(a, b, c) {
  console.log(arguments.length);
  console.log("값::" + arguments[0]);
}
