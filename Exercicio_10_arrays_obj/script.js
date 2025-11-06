// let calculadora = {
//   somar,
//   subtrair,
//   multiplicar,
//   dividir,
// };
// function somar(a, b) {
//   return a + b;
// }
// function subtrair(a, b) {
//   return a - b;
// }
// function multiplicar(a, b) {
//   return a * b;
// }
// function dividir(a, b) {
//   return a / b;
// }

// console.log(calculadora.somar(3, 4));
// console.log(calculadora.subtrair(5, 5));
// console.log(calculadora.multiplicar(8, 2));
// console.log(calculadora.dividir(5, 2));

const calculadora = {
  soma: function (a, b) {
    return a + b;
  },
  subtrair: function (a, b) {
    return a - b;
  },
  multiplicar: function (a, b) {
    return a * b;
  },
  dividir: function (a, b) {
    return a / b;
  },
};

console.log(calculadora.soma(3, 4));
console.log(calculadora.subtrair(5, 5));
console.log(calculadora.multiplicar(8, 2));
console.log(calculadora.dividir(5, 2));
