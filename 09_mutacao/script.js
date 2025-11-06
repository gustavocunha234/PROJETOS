let pessoa = {
  nome: "Gustavo",
};

let pessoa2 = pessoa;
let pessoa3 = {
  nome: "Gustavo",
};

console.log(pessoa == pessoa2);
console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa2);

pessoa2.nome = "salim";

console.log(pessoa.nome);

pessoa.nome = "Bianca";
console.log(pessoa2.nome);

console.log(pessoa);
console.log(pessoa2);
