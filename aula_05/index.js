
//import da Conta para o index.
import { Conta } from './Conta.js';

//import da ContaCorrente para o index.
import { ContaCorrente } from './ContaCorrente.js';

//instanciamento da Conta para criar uma nova conta
const cliente1 = new Conta('Jessica', 'XXX.XXX.XX-XX');
console.log(cliente1)

//instanciamento da Conta Corrente para criar uma nova conta Corrente
const contaCorrenteJessica = new ContaCorrente('1010');
console.log('Saldo Atual: ', contaCorrenteJessica.saldo)




