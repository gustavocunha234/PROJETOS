let pessoa = {
  nome: "Gustavo",
  profissao: "Programador",
  idade: 25,
};

console.log(pessoa.nome);
console.log(pessoa.idade);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = false;

console.log(pessoa.casado);
