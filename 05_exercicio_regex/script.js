const validarUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;
console.log(validarUsuario.test("gustavo_123"));
