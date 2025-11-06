let p = Promise.resolve(new Error("Nao deu certo"));

console.log("outros codigos");

p.then((value) => console.log(value)).catch((reason) =>
  console.log("Falhou " + reason)
);
