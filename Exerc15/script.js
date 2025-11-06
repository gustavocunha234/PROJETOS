let num = 66;
let divisoes = 0;

for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    divisoes++;
  }
}

if (divisoes == 2) {
  console.log("O numero é primo " + num);
} else {
  console.log("O numero não é primo " + num);
}
