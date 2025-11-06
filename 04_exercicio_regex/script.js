const validaIp = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validaIp.test("172.168.0.1"));
console.log(validaIp.test("asasasas172.4546.456"));
console.log(validaIp.test("172.0.0.1"));
console.log(validaIp.test("8.8.8.8"));
