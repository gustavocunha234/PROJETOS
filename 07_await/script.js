function SomarComDelay(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 4000);
  });
}

async function resSoma(a, b, c) {
  let x = SomarComDelay(a, b);
  let y = c;

  return (await x) + y;
}

resSoma(1, 2, 3).then((value) => console.log(value));
