import { Cliente } from './Cliente.js';


const cliente1 = new Cliente('Dora Ribeiro', '223.001.221-29', 1500, 'XXX-12', 2020, 'Amarelo', 'RJ-BR', 'Joana Maria ')
console.log('Primeira cliente: ', cliente1)
console.log(cliente1.descontar())
console.log(cliente1.verificarCor())


console.log('------------------------')

const cliente2 = new Cliente('Marcela Janino Silva', '321.101.231-29', 3000, 'XXM-y', 2019, 'Roxo', 'SP-BR', 'Drielly Gomes Almeida')
console.log('Segunda cliente: ', cliente2)
console.log(cliente2.verificarCor())
console.log(cliente2.descontar())


console.log('------------------------')

const cliente3 = new Cliente('Raquel Borges Figueredo', '910.311.425-01', 4000, 'MDM-PRO', 2020, 'Azul', 'MG-BR', 'Fran Carneiro de Pinha')
console.log('Segunda cliente: ', cliente3)
console.log(cliente3.descontar())

