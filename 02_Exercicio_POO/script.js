//POO JS
class Carrinho {
  constructor(itens, qtTotal, vlrTotal) {
    this.itens = itens;
    this.qtTotal = qtTotal;
    this.vlrTotal = vlrTotal;
  }

  //add e remove itens do carrinho

  add(quantidade, quantidadeTotal, valorTotal) {
    this.itens += quantidade;
    quantidadeTotal += quantidade;
    this.vlrTotal *= valorTotal;
  }
  remove(quantidade, quantidadeTotal, valorTotal) {
    this.itens -= quantidade;
    quantidadeTotal -= quantidade;
    this.vlrTotal /= valorTotal;
  }
}

let carrinho = new Carrinho(20, 2, 200);
console.log(carrinho);

console.log(carrinho.itens);
console.log(carrinho.qtTotal);
console.log(carrinho.vlrTotal);

carrinho.add(20, 40, 100);

console.log(carrinho.itens);
console.log(carrinho.qtTotal);
console.log(carrinho.vlrTotal);

carrinho.remove(20, 40, 100);

console.log(carrinho.itens);
console.log(carrinho.qtTotal);
console.log(carrinho.vlrTotal);
