'use strict'

const perfumes = [
    {nome: 'Choc', icon:'egeoChoc.png', cor: 'turquoise'},
    {nome: 'Red', icon:'egeoRed.png', cor: 'springGreen'},
    {nome: 'Vanilla', icon:'egeoVanilla.png', cor: 'violet'},
]

function criarMenu(perfume){
    const novoItem = document.createElement('li')
    const novaImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')

    novaImagem.src = `./img/${perfume.icon}`
    novoSpan.textContent = perfume.nome

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoSpan)
    novoItem.style = `--cor-hover:${perfume.cor}`

    lista.appendChild(novoItem)

}
perfumes.forEach(criarMenu)
