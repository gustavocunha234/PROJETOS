let num = 1;
let num2 = 5;
let num3 = 4;
let num4 = 7;

function imprimirNumeros(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}
imprimirNumeros(num, num2, num3, num4);
console.log("pause");
imprimirNumeros(2, 3, 4, 56, 6);

//Muito importante
