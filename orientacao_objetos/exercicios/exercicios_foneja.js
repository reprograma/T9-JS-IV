class Cliente {
  constructor(nome, cpf, valor, modeloCelular, anoCelular, corCelular, loja, atendente) {
    this.nome = nome;
    this.cpf = cpf;
    this.dataCompra = new Date();
    this.valor = valor;
    this.modeloCelular = modeloCelular;
    this.anoCelular = anoCelular;
    this.corCelular = corCelular;
    this.loja = loja;
    this.atendente = atendente;

  }


  descontar() {
    const desconto = this.valor < 1500 ? `Terá desconto de 10%` : ` Não terá desconto`
    return desconto;
  }

  verificarCor() {

    const corMinuscula = this.corCelular.toLowerCase();
    console.log(corMinuscula)

    if (corMinuscula === 'Roxo') {
      return `Cor em estoque`
    } else {
      return `Cor ${this.corCelular} indisponível `
    }
  }


}
const cliente1 = new Cliente('Dora Barreto', '223.001.221-29', 2000, 'XXX-12', 2020, 'Amarelo', 'RJ-BR', 'Joana Maria')
console.log("dados cliente1:", cliente1);
console.log("cliente 1", cliente1.descontar());
console.log("cliente 1", cliente1.verificarCor());
console.log('_______________________');
