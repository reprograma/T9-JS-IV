/**1. Crie três objetos com as propriedades: nome e sobrenome.
 *  Em seguida, acesse os valores dos objetos.  */

//LITERAL

const minhasInformacoes = {
  nome: "Jéssica",
  sobrenome: "Osko",
  nomes: {
    nome: ['Jessica', 'Rihanna']
  }

}

console.log(minhasInformacoes.nomes.nome);

minhasInformacoes.sobrenome;


/**2. Com os objetos criados na resposta acima,
 * insira-os dentro de uma função chamada nomeCompleto
 *  e retorne o nome e sobrenome de apenas um objeto. */

function nomeCompleto() {
  const minhasInformacoes = {
    nome: "Jéssica",
    sobrenome: "Osko"
  }

  const objetoConcatenado = minhasInformacoes.nome + minhasInformacoes.sobrenome;
  const objetoTemplateString = `Nome: ${minhasInformacoes.nome} \n Sobrenome:${minhasInformacoes.sobrenome}`

  return objetoTemplateString;
}

nomeCompleto();


//3. Crie uma variável e armazene um objeto vazio.

const objetoVazio = {}

//Analise o seguinte código e verifique qual será a sua saída:

const objt = {
  nome: "Jessica"
  idade: 26
}

obj.nome

//Uncaught SyntaxError: Unexpected identifier

const objt = {
  nome: "Jessica",
  idade: 26
}

objt.nome