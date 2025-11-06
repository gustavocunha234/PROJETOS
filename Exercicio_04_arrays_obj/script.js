let onibus = {
  rodas: 8,
  limitPass: 40,
  Portas: 2,
};

let adicionarJanela = {
  janela: 20,
};

console.log(Object.assign(onibus, adicionarJanela));

let removerRodas = delete onibus.rodas;

console.log(removerRodas);

console.log(onibus);
