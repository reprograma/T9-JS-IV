class Cliente {
  constructor(
    nome,
    cpf,
    valor,
    modeloCelular,
    anoCelular,
    corCelular,
    loja,
    atendente) {
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
    //bloco
    /* if (this.valor < 1500) {
       return `Terá desconto 10%`
     } else {
       return `Não terá desconto`
     }*/

    //ternario 
    const desconto = this.valor < 1500 ? `Terá desconto na compra do celular` : `Não terá desconto`
    return desconto;
  }

  //Criar um metodo verificarCor
  //A pessoa que trabalha no estoque inseriu que só tem a cor Roxo.
  // Faça um metodo que sinalize que está indisponível as cores dos celulares que não são da cor roxa.

  verificarCor() {
    const celularPalavraMinuscula = this.corCelular.toLowerCase();

    const verificacaoCorCelular = celularPalavraMinuscula === "roxo" ? `Cor disponivel` : `indisponivel`;

    return verificacaoCorCelular;

  }
}

const cliente1 = new Cliente('Dora Ribeiro', '223.001.221-29', 1300, 'XXX-12', 2020, 'Amarelo', 'RJ-BR', 'Joana Maria ')
console.log('Primeira cliente: ', cliente1)
console.log(cliente1.descontar())
console.log(cliente1.verificarCor())


console.log('------------------------')

const cliente2 = new Cliente('Marcela Janino Silva', '321.101.231-29', 1300, 'XXM-y', 2019, 'Roxo', 'SP-BR', 'Drielly Gomes Almeida')
console.log('Segunda cliente: ', cliente2)
console.log(cliente2.verificarCor())


console.log('------------------------')

const cliente3 = new Cliente('Raquel Borges Figueredo', '910.311.425-01', 4000, 'MDM-PRO', 2020, 'Azul', 'MG-BR', 'Fran Carneiro de Pinha')
console.log('Segunda cliente: ', cliente3)
console.log(cliente3.verificarCor())


