const validarDataNasc = /[0-31]{2}[/][0-12]{2}[/][1920-2025]{4}/;

console.log(validarDataNasc.test("02/11/1999"));
console.log(validarDataNasc.test("2/11/1999"));
console.log(validarDataNasc.test("2-11-1999"));
