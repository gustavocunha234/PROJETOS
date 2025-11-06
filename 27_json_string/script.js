let pessoa = {
  nome: "Gustavo",
  idade: 25,
  profissoa: "Programador",
  hobbies: ["video game", "leitura", "correr"],
};

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);

//json para string

let pessoaJson = JSON.parse(pessoaTexto);

console.log(pessoaJson);
