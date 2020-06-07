/* 
1. Crie uma classe chamada Colaboradores.
*/

class Colaboradores {

}

/*2. Crie uma classe chamada Colaboradores, atribua as propriedades a seguir dentro do método constructor. 

Propriedades que estarão dentro do método constructor: 

nome, departamento, função*/

class Colaborador {
  constructor(nome, departamento, funcao) {
    this.nome = nome;
    this.departamento = departamento;
    this.funcao = funcao;
  }
}


/*3. Analise o código e ajuste os erros. */

class Usuario {
  constructor(nome, email, confirmacaoEmail) {
    this.nome = nome;
    this.email = email;
    this.confirmacaoEmail = confirmacaoEmail;
  }
}

/*4. Qual será a saída após instanciar a classe Colaboradores?*/

/*class Funcionario {
  constructor(nome, departamento, funca) {
    this.nome = nome;
    this.departamento = departamento;
    this.funcao = funcao;
  }

}

const colaborador1 = new Funcionario('Jenifer', 'Engenharia', 'Engenheira de Dados')

console.log(colaborador1);*/


/* SAÍDA DO EXERCÍCIO 4:    this.funcao = funcao;
                  ^

ReferenceError: funcao is not defined */


/*Tratar os erros do exercício 4*/


class Funcionario {
  constructor(nome, departamento, funcao) {
    this.nome = nome;
    this.departamento = departamento;
    this.funcao = funcao;
  }

}

const colaborador1 = new Funcionario('Jenifer', 'Engenharia', 'Engenheira de Dados')

console.log(colaborador1);


/*5. Dado uma classe: 

class Usuario {
constructor(nome, email, confirmacaoEmail) {
this.nome = nome;
this.email = email;
this.confirmacaoEmail = confirmacaoEmail;
}

}

Crie um metodo que confirme se os dois emails são iguais ou diferentes.
Lembre-se de tratar o campo de emails, colocando-os em letras minúsculas
e testando o código para verificar se realmente deu certo.*/

class User {
  constructor(nome, email, confirmarEmail) {
    this.nome = nome;
    this.email = email;
    this.confirmarEmail = confirmarEmail;
  }

  verificarEmail() {
    const userEmail = this.email.toLowerCase();
    const userConfirmarEmail = this.confirmarEmail.toLowerCase();

    const condicaoEmail = userEmail === userConfirmarEmail ? `Os emails são iguais` : `Os emails não são iguais`;

    return condicaoEmail;

    //condição em bloco 
    /* if (userEmail === userConfirmarEmail) {
       return `Os emails são iguais`
     } else {
       return `Os emails não são iguais`
     }*/


  }
}

const user1 = new User('Moana', 'mEU@email.COM', 'meUEMAIL.COM')
console.log(user1.verificarEmail())


/*6. Insira uma propriedade chamada sobrenome na classe Aluna.
Em seguida, crie um método de saudações e retorne a seguinte frase:
`Olá nome sobrenome, seja bem vinda a plataforma de estudos da Reprograma!`*/

class Aluna {
  constructor(nome, sobrenome, email, confirmacaoEmail, celular) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.confirmacaoEmail = confirmacaoEmail;
    this.celular = celular;
  }

  saudacoes() {
    return `Olá ${this.nome} ${this.sobrenome}, seja bem vinda a plataforma de estudos da Reprograma!`
  }
}

const aluna1 = new Aluna('Bruna', 'Almeida', 'bruna@email.com.br', 'bruna@email.com.br')

console.log(aluna1.saudacoes())