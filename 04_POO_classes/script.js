let cachorro = {
  patas: 4,
  raca: "srd",
  latir: function () {
    console.log("au au");
  },
};

let labrador = Object.create(cachorro);
labrador.latir();

labrador.raca = "Labrador";
console.log(labrador.raca);
console.log(cachorro.raca);

let pastor = Object.create(cachorro);

pastor.raca = "Pastor alemao";

console.log(pastor.raca);
