function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function process() {
  console.log("안녕하세요");
  await sleep(3000);
  console.log("반갑습니다.");
}

console.log("start");

process();

console.log("end");
