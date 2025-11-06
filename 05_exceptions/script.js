function saudacao(nome) {
  if (typeof nome != "string") {
    throw new Error("O parametro nome precisa ser uma string");
  } else {
    console.log(`Ola ${nome},`);
  }
}

saudacao("Gustavo");
saudacao(5);
