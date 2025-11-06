let p = Promise.resolve(5);

console.log("outros codigos");

console.log(p);

p.then((value) => {
  return value + 5;
}).then((value) => {
  console.log(value);
});
