let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4];

function imprimirElementos(arr) {
  if (arr.length >= 5) {
    console.log("Muitos elemento");
  } else {
    console.log("Poucos elementos");
  }
}

imprimirElementos(arr1);
imprimirElementos(arr2);
