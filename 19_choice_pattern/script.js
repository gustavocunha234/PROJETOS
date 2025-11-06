const reg = /\w+: (Gustavo|Joao|Simone)/;

console.log(reg.test("Nome: Gustavo"));
console.log(reg.test("Nome: jurandi"));
console.log(reg.test("Nome: Simone"));
