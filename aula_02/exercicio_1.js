/**
1. Crie uma classe chamada Pessoa,
inicializando-a com o metódo chamado constructor.
 */

class Pessoa {
  constructor() {

  }
}


/**
 * Dado um objeto: 
let celular = {
 nome: 'Super X'
 modelo: 'XX-Y', 
 valor: 900
}
Utilizando a Orientação a Objetos para modular, de forma mais legível,
crie uma classe,
com o metódo constructor,
atribua os parametros no metódo e em seguida,
insira as propriedades e parâmetro do constructor.
 */
class Celular {
  constructor(nome, modelo, valor) {
    this.nome = nome;
    this.modelo = modelo;
    this.valor = valor;
  }
}

const celular1 = new Celular('Super X', 'XX-Y', 900);
console.log('Dados do celular: ', celular1);
