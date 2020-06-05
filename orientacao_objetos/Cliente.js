class Cliente {
  constructor(
    nome,
    cpf,
    valor,
    modeloCel,
    anoCel,
    corCel,
    loja,
    nomeAtendente
  ) {
    this.nome = nome;
    this.cpf = cpf;
    this.dataCompra = new Date();
    this.valor = valor;
    this.modeloCel = modeloCel;
    this.anoCel = anoCel;
    this.corCel = corCel;
    this.loja = loja;
    this.nomeAtendente = nomeAtendente;
  }


  //   descontar() {
  // //       //bloco
  // //     // if (this.valor < 1500) {
  // //     //   return "Terá um desconto de 10%";
  // //     // } else {
  // //     //   return "Não terá desconto";
  // //     // }
  // //ternario
  // const desconto = this.valor < 1500 ? `Terá um desconto de 10%`: `Não terá desconto`;
  // return desconto;  
  // // // }


  verificarCor() {
    if (this.corCel === "Roxo") {
      return "Cor disponivel"
    } else {
      return "Cor indisponivel"
    }

  }

}
