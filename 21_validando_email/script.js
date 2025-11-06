const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("gustavocunha42@gmail.com"));
console.log(validarEmail.test("gustavocunha@gmail"));
console.log(validarEmail.test("gmail.com"));
