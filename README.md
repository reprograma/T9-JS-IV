
## Revisão 

### [Variável](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Vari%C3%A1veis)

> Variáveis são ferramentas indispensáveis na programação, são nelas que colocamos valores para podermos trabalhar com eles posteriormente, similar à álgebra da matemática. As variáveis são um dos fatores para mantermos o código dinâmico, fácil de ser lido, compreendido e escalável. 

### Tipos de variáveis

Os tipos de variáveis em JS são classificados em:


String/Cadeias de texto | Números | Booleanos | Arrays/Listas | Objetos | Funções
------------ | ------------- | ------------- | ------------- | ------------- | -------------
Uma String nada mais é que texto puro | São os números, seja eles integer, float, double etc. | São os operadores booleanos (true ou false) | É uma estrutura de dado para armazenar uma coleção de valores, sendo eles de qualquer tipo. | Conjunto de atributos aninhados a uma variável denomina-se um objeto. | Em JavaScript é possível declarar uma variável como uma função, podendo fazer operações e retornando o valor para a variável de declaração.

[Quando usar: var, const ou let?](https://medium.com/collabcode/javascript-e-suas-vari%C3%A1veis-var-let-e-const-b035b44c2dab)

### [Funcões](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Fun%C3%A7%C3%B5es) 
> Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

### [Arrays/Listas](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
> Arrays/Listas em JavaScript são usados para armazenar vários valores em uma única variável.


### [Objetos](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript/Objetos/B%C3%A1sico)

> Objetos é uma coleção de dados e/ou funcionalidades relacionadas. 


# [A história do ES6]() 
Em resumo, o ECMA (Script) é a associação que fornece as diretrizes para as quais todos os navegadores devem suportar, além de fornecer novos recursos disponíveis em JavaScript.


# [Introdução a Orientação a Objetos](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript/Objetos/Object-oriented_JS).

Para começar, vamos dar uma visão simplista e de alto nível do que é programação orientada a objeto (OOP).A idéia básica da OOP é que usamos objetos para modelar coisas do mundo real que queremos representar dentro de nossos programas, e / ou fornecer uma maneira simples de acessar funcionalidades que de outra forma seriam difíceis ou impossíveis de usar.

Ela pode ser uma ótima maneira de organizar seus projetos. Introduzida com o ES6, a sintaxe da classe javascript facilita o OOP.


## [Classes](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes) 

Classe é um conjunto de características e comportamentos que definem o conjunto de objetos pertencentes à essa classe. 

Antes que a sintaxe da classe estivesse disponível em ES6, se você quisesse fazer POO, seria necessário usar uma função construtora.

  ```javascript
   function Pessoa (nome) {
       this.nome = nome ;
    }

    var pessoa1 =  new Pessoa ('Joana');

    console.log (pessoa1.nome); // 'Joana'
  ```

Isso funcionou bem, até você querer que outras classes possam herdar propriedades e metódos de outra classe. 

A sintaxe do ES6 é um pouco mais detalhada, mas não tão diferente.

```javascript
class Pessoa{
  constructor(nome){
    this.nome = nome;
  }
}

const pessoa1 = new Pessoa('Joana')

console.log(pessoa1.nome) //'Joana'
```

[Constructor]()
Um construtor é uma função que cria uma instância de uma classe que normalmente é chamada de "objeto". Em JavaScript, um construtor é chamado quando você declara um objeto usando a newpalavra - chave.

O objetivo de um construtor é criar um objeto e definir valores se houver alguma propriedade de objeto presente. É uma maneira elegante de criar um objeto porque você não precisa declarar explicitamente o que retornar, pois a função construtora, por padrão, retorna o objeto que é criado dentro dele.

Os parâmetros predefinidos de uma função permitem que parâmetros regulares sejam inicializados com com valores iniciais caso undefined ou nenhum valor seja passado.

```javascript
class Pessoa{
  // Abaixo veja um exemplo de como se declarar o constructor com o paramêtro nome. 
  constructor(nome){
    this.nome = nome;
  }
}

const pessoa1 = new Pessoa('Joana')

console.log(pessoa1.nome) //'Joana'
```

[this]()
Em outras palavras, toda função javascript durante a execução tem uma referência ao seu contexto de execução atual, chamado this. Contexto de execução significa a forma que a função é chamada.

```javascript
class Pessoa{
  // Abaixo veja um exemplo de como se declarar o constructor com o paramêtro nome. 
  constructor(nome){
    //this está fazendo referência a propriedade da classe Pessoa. 
    this.nome = nome;
  }
}

const pessoa1 = new Pessoa('Joana')

console.log(pessoa1.nome) //'Joana'
```


[Objetos](https://developer.mozilla.org/pt-PT/docs/Javascript_orientado_a_objetos)
Objetos são instâncias de uma classe. 
Eles podem ser considerados os principais atores de uma aplicação ou simplesmente blocos de construção.

```javascript
class Pessoa{
  // Abaixo veja um exemplo de como se declarar o constructor com o paramêtro nome. 
  constructor(nome){
    //this está fazendo referência a propriedade da classe Pessoa. 
    this.nome = nome;
  }
}

//O operador new está instanciando a classe Pessoa e atribuindo as suas propriedades ao objeto criado: pessoa1, no caso temos nome. 
const pessoa1 = new Pessoa('Joana')

//saída da propriedade nome do objeto pessoa1. 
console.log(pessoa1.nome) //'Joana'
```

## [Métodos](https://developer.mozilla.org/pt-PT/docs/Javascript_orientado_a_objetos)
Uma ação do objeto.
Eles determinam o comportamento dos objetos de uma classe. Sendo assim, podem alterar o estado de um objeto em determinadas ações.

```javascript
class Pessoa{
  // Abaixo veja um exemplo de como se declarar o constructor com o paramêtro nome. 
  constructor(nome){
    //this está fazendo referência a propriedade da classe Pessoa. 
    this.nome = nome;
  }
  //O método ficará dentro da Classe, pois é um comportamento que ela terá ao ser disparada essa ação no objeto.
  metodo(){
    return alert(`Seja bem vinda, ${this.nome}!`)
  }
}

//O operador new está instanciando a classe Pessoa e atribuindo as suas propriedades ao objeto criado: pessoa1, no caso temos nome. 
const pessoa1 = new Pessoa('Joana')

//O método foi chamado no objeto criado. 
console.log(pessoa1.metodo()) //Seja bem vinda, Joana!
```

