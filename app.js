'use strict'

const disciplinas = [
    {nome: 'PPDM', icon:'facebook.png'},
    {nome: 'PRO', icon:'gmail.png'},
    {nome: 'PWBE', icon:'instagram.png'},
    {nome: 'PWFE', icon:'youtube.png'},
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

    lista.appendChild(novoItem)

}

disciplinas.forEach(criarMenu)
