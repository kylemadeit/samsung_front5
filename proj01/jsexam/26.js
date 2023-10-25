function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function process() {
  console.log("안녕하세요!!");
  await sleep(1000); //1초쉬고!!
  console.log("반갑습니다.");
}

console.log("start!!");

process().then(() => {
  console.log("작업이 끝났어요!!");
});

console.log("end!!");
