//Dado o objeto, analise a forma que foi declarada. 
//Em seguida, ajuste o objeto produtos da forma correta de se declarar.

/**let produtos = {
  videos: {
    comedia: ["comedia1""comedia2"];
    romance ["romance1", "romance2"]
  },
  revistas: [
    moda = ["lalala", "lililili"],
    saude = ["lalala", "lililili"],
  ]
  jogos {
    rpg ["rpg1", "rpg2", rpg3],
    acao: ["acao1", "God of War"]
  }
}

*/

let produtos = {
  videos: {
    comedia: ["comedia1", "comedia2"],
    romance: ["romance1", "romance2"]
  },

  revistas: [{
    moda: ["lalala", "lililili"],
    saude: ["lalala", "lililili"],
  }],

  revistasBemEstar: {
    moda: ["lalala", "lililili"],
    saude: ["lalala", "lililili"],
  },

  jogos: {
    rpg: ["rpg1", "rpg2", "rpg3"],
    acao: ["acao1", "God of War"]
  }
}

console.log(produtos)


/**
 * o objeto poderia conter um objeto,
 *  um array e depois outro objeto? 
 * como estava na sintaxe antes da gente corrigir?
 */

let hobbies = {
  lista: [{
    mercado: ['Arroz', 'feijão']
  }]
}

