const validarID = /\d+ID\b/;
console.log(validarID.test("5555ID"));
console.log(validarID.test("4545454"));
console.log(validarID.test("ID345645645"));
console.log(validarID.test("ID"));
