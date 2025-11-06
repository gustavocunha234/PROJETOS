const pontoRegex = /./;
console.log(".");
console.log(pontoRegex.test("asas"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));

const dRegex = /\d/; // [0-9]
console.log("d");
console.log(dRegex.test("asas"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123asd"));

const dRegex2 = /\D/; //[^0-9]

console.log("D");
console.log(dRegex2.test("asas"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("123asd"));

const sRegex = /\s/;
console.log("s");
console.log(sRegex.test("asas"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("123asd"));

const wRegex = /\w/;

console.log("w");
console.log(wRegex.test("asas"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("123asd"));
