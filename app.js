'use strict'

const disciplinas = [
    {nome: 'PPDM', icon:'mobile.png', cor: 'turquoise'},
    {nome: 'PRO', icon:'projetos.png', cor: 'springGreen'},
    {nome: 'PWBE', icon:'backend.png', cor: 'violet'},
    {nome: 'PWFE', icon:'frontend.png', cor: 'orange'},
]

function criarMenu(disciplina){
    const novoItem = document.createElement('li')
    const novaImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')

    novaImagem.src = `./img/${disciplina.icon}`
    novoSpan.textContent = disciplina.nome

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoSpan)
    novoItem.style = `--cor-hover:${disciplina.cor}`

    lista.appendChild(novoItem)

}

disciplinas.forEach(criarMenu)
