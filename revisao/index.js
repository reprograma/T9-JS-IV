// Defina uma variável e armazene uma string.

const nome = "Jéssica";

//Defina uma variável e armazene um array vazio.

const meuLista = [];

/**Defina uma variável chamada perfil e armazene
 *  um objeto com as seguintes 
 * informações: nome: "Lucimara", idade: 34
Em seguida, pelo console.log(), mostre o valor nome que está armazenado. **/

const perfil = {
  nome: "Lucimara",
  idade: 34
}

console.log('perfil:', perfil)

/**Suponha que tenhamos
 *  que armazenar nomes de clientes,
 * poderíamos criar uma variável
 *  para cada cliente, certo ?

Para cadastrar nomes dos clientes,
 poderíamos criar
 uma variável para cada um, né?

let cliente1 = "João, Maria e José";
let cliente2 = "Maria";
let cliente3 = "José"

Com essas três variáveis seria fácil
 de administrar mas se tivessemos 300 clientes para cadastrar seria inviável.

Para resolver problemas como esse é que
 os arrays foram criados, com eles podemos armazenar uma grande quantidade de dados numa única variável.

Sendo assim, insira o nome desses
 clientes dentro de um array chamado clientes. */

const clientes = ["João", "Maria", "José"];


//A partir do array criado na resposta 4,
// na sequência dos índices do array chamado clientes.
// Qual o nome que terá no índice 2?
console.log('cliente: ', clientes[2]);



/**Suponha que tenhamos que armazenar nomes de clientes, poderíamos criar uma variável para cada cliente, certo ?

Para cadastrar nomes dos clientes, poderíamos criar uma variável para cada um, né?

let cliente1 = "João";
let cliente2 = "Maria";
let cliente3 = "José"

Com essas três variáveis seria fácil de administrar mas se tivessemos 300 clientes para cadastrar seria inviável.

Para resolver problemas como esse é que os arrays foram criados, com eles podemos armazenar uma grande quantidade de dados numa única variável.

Sendo assim, insira o nome desses clientes dentro de um objeto chamado clientes. */

const clientesObjeto = {
  nome: ["Maria", "José", "João"]
}

/**Crie uma função que receba um
 *  parâmetro chamado nome e com
 *  o objeto a seguir:

const endereco = {
     rua: "Rua dos pinheiros",
     numero: 1293,
     bairro: "Centro",
     cidade: "São Paulo",
     uf: "SP"
};


Em seguida, retorne o seguinte conteúdo:

nome mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
nº 1293. */


/** Adicione ["Cinthia", 33] no final do meuArray.

const meuArray = [["Joana", 23], ["Felipe", 21]];

  */

const meuArray = [["Joana", 23], ["Felipe", 21]];
meuArray.push(["Cinthia", 33])

console.log(meuArray)


/** Crie uma função chamada
 *  funcaoComParametros que aceite dois
 *  parametros e exiba sua soma no console.log.
Chame a função passando dois números como
 parametros. */

function funcaoComParametros(x, y) {
  const soma = x + y;
  console.log('soma: ', soma)
}

funcaoComParametros(10, 20)


function funcaoSoma(a, b) {
  return a + b;
}

console.log("Função soma com retorno:", funcaoSoma(2, 3))
