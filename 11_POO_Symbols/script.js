class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }
  latir() {
    console.log("Au au");
  }
}
Cachorro.prototype.raca = "srd";
let patas = Symbol();

Cachorro.prototype[patas] = 4;

let labrador = new Cachorro("Labrador", "Preto");

console.log(labrador.patas);
labrador.latir();

console.log(Cachorro.prototype.raca);
console.log(labrador.raca);

//Acessando symbol
console.log(Cachorro.prototype[patas]);
