const users = [{
  nome: "Tathiana Borges",
  imagem: "https://image.freepik.com/free-photo/portrait-beautiful-young-pretty-african-american-girl-sitting-beach-lake-listening-music-her-headphones_146671-10705.jpg",
  descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum metus justo, porttitor non lectus non, porta facilisis sapien."
},
{
  nome: "Lívia Vieira",
  imagem: "https://image.freepik.com/free-photo/cheerful-casual-young-woman-celebrating_53876-64960.jpg",
  descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum metus justo, porttitor non lectus non, porta facilisis sapien. "
},
{
  nome: "Jenifer Silva",
  imagem: "https://image.freepik.com/free-photo/young-asian-woman-looking-happy_23-2148212443.jpg",
  descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum metus justo, porttitor non lectus non, porta facilisis sapien. "
}]

class Avatar {
  constructor(usuario) {
    this.usuario = usuario
  }

  renderComCreate() {
    const avatarDiv = document.createElement('div')
    avatarDiv.setAttribute("class", "avatar background")

    const avatarImg = document.createElement('img')
    avatarImg.src = this.usuario.imagem
    avatarImg.setAttribute("class", "img-rounded")

    const avatarTitle = document.createElement('h2')
    avatarTitle.innerHTML = this.usuario.nome
    avatarTitle.setAttribute("class", "nome")

    const avatarDescricao = document.createElement('p')
    avatarDescricao.innerHTML = this.usuario.descricao

    avatarDiv.appendChild(avatarImg)
    avatarDiv.appendChild(avatarTitle)
    avatarDiv.appendChild(avatarDescricao)

    document.getElementById('cards-section').appendChild(avatarDiv)
  }

  render() {
    const avatar = `<div class="avatar background">
        <img class="img-rounded" src=${this.usuario.imagem} />
        <h2>${this.usuario.nome}</h2>
        <p>${this.usuario.descricao}</p>
      </div>`
    document.getElementById('cards-section').insertAdjacentHTML('beforeend', avatar)
  }
}


users.map((user, index) => {
  new Avatar(user).renderComCreate()
})

document.getElementById('cards-section').insertAdjacentHTML('beforeend', '<br/><br/>')

users.forEach((user) => {
  new Avatar(user).render()
})


