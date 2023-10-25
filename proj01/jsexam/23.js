const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  });
});

myPromise.then((n) => {
  console.log(n);
});
