'use strict'

const perfumes = [
    {nome: 'Choc', icon:'egeoChoc.png', cor: 'pink'},
    {nome: 'Red', icon:'egeoRed.png', cor: 'crimson'},
    {nome: 'Vanilla', icon:'egeoVanilla.png', cor: 'deepskyblue'},
    {nome: 'Dolce Colors', icon: 'egeoDolceColors.png', cor: 'hotpink'},
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

const perfumes1 = [
    {
        nome: "EGEO RED",
        descricao: "Egeo Red traz uma fragrância feminina intensa com um toque de sensualidade. Traz o cheiro licoroso do rum, com o doce das frutas e o colorido das flores. Uma combinação deliciosa e viciante! Confira os produtos da linha!",
        imagem: "egeoRed.webp"
    },
    {
        nome: "EGEO VANILLA",
        descricao: "Egeo Vanilla Vibe Desodorante Colônia te convida a experimentar uma combinação inusitada: toda a cremosidade da Baunilha com um toque picante da Pimenta Rosa,",
        imagem: "egeoVanilla.webp"
    },
    {
        nome: "EGEO DOLCE COLORS",
        descricao: "o Egeo Dolce Colors traz uma combinação inusitada da Flor Pink Peônia e do Mousse de Framboesa para perfumar a pele com um toque mais leve e doce.",
        imagem: "egeoDolceColors.webp"
    }   
    
];
 const imagemPerfume = document.createElement('img')

    const descricaoPerfume = document.createElement('p')

    imagemPerfume.src = `./img/${perfumes.imagem}`
   
    function criar(perfume) {
        const siteperfumes = document.getElementById('produtos');
    
        // Criando o wrapper do card
        const perfumewrapper = document.createElement('div');
        perfumewrapper.classList.add('wrapper');
    
        // Criando a estrutura do card
        const perfumeDiv = document.createElement('div');
        perfumeDiv.classList.add('Card');
    
        // Criando a imagem do perfume
        const imagemPerfume = document.createElement('img');
        imagemPerfume.src = `./img/${perfume.imagem}`;
        imagemPerfume.alt = perfume.nome;
    
        // Criando a div interna do card
        const perfumeInfoDiv = document.createElement('div');
    
        // Criando o título (nome do perfume)
        const nomePerfume = document.createElement('h2');
        nomePerfume.textContent = perfume.nome;
    
        // Criando a descrição do perfume
        const descricaoPerfume = document.createElement('p');
        descricaoPerfume.textContent = perfume.descricao;
    
        // Criando o botão de compra
        const botaoComprar = document.createElement('button');
        botaoComprar.classList.add('compras');
        botaoComprar.textContent = 'COMPRAR';
    
        // Adicionando o nome e a descrição dentro da div interna do card
        perfumeInfoDiv.appendChild(nomePerfume);
        perfumeInfoDiv.appendChild(descricaoPerfume);
    
        // Adicionando a imagem, a div de informações e o botão de compra ao card
        perfumeDiv.appendChild(imagemPerfume);
        perfumeDiv.appendChild(perfumeInfoDiv);
        perfumeDiv.appendChild(botaoComprar);
    
        // Adicionando o card completo ao wrapper
        perfumewrapper.appendChild(perfumeDiv);
    
        // Adicionando o wrapper ao contêiner principal
        siteperfumes.appendChild(perfumewrapper);
    }
    
    perfumes1.forEach(criar);
    
