const validaDominio = /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test("www.google.com"));
console.log(validaDominio.test("www.vivacalmo.com"));
console.log(validaDominio.test("www.google"));
