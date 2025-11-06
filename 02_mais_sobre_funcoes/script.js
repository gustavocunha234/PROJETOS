function multiplicarTresNumeros(x, y, z) {
  return x * y * z;
}

console.log(multiplicarTresNumeros(2, 3, 5));

const mult = multiplicarTresNumeros(5, 4, 3);

console.log("O valor de mult é " + mult);

function PodeDigirir(idade, cnh) {
  if (idade >= 18 && cnh == true) {
    console.log("Pode dirigir");
  } else {
    console.log("Não pode dirigir");
  }
}

console.log(PodeDigirir(19, true));
console.log(PodeDigirir(59, true));
console.log(PodeDigirir(19, 0));
console.log(PodeDigirir(59, 1));
