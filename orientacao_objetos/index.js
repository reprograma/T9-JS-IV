class Cliente {
  constructor(nome, email, cpf) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
  }
}

const cliente1 = new Cliente('Jéssica', 'jessica@email.com', 'XXX.XXX.XX-XX')

console.log("Dados da cliente: ", cliente1);