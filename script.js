//lista de items 
let listFigure = [];
let listPainting = [];

// função para criar novos itens



function createActionItem(nome,valor,imagem){ // se for action figures
    
    let item = {
        imagem: imagem,
        nome: nome,
        valor: `R$ ${valor}`,
        classValor: 'valor', // class para os spans 
        classNome: 'nome'
    }
    return listFigure.push(item)
}

function createPaintingItem(nome,valor,imagem){ // se for Paintings
    
    let item = {
        imagem: imagem,
        nome: nome,
        valor: `R$ ${valor}`,
        classValor: 'valor',
        classNome: 'nome'
    }
    return listPainting.push(item)
}

createActionItem('menininha', 1000,'./assets/img/actions/animewoman.jpg' )
createActionItem('goku', 1000,'./assets/img/actions/dragonballpersonagem.jpg' ) // inserindo os objetos
createActionItem('yodinha', 1000,'./assets/img/actions/starwarspersonagem.jpg' )
createPaintingItem('relogio', 500,'./assets/img/painting/clock.jpg' )
createPaintingItem('controle', 500,'./assets/img/painting/gamepad.jpg' )
createPaintingItem('robozão', 500,'./assets/img/painting/personagem.jpg' )

console.log(listFigure)

function createLi(arr,ulClass){  // recebe a ul(que separa as listas), o array com os objetos criados
    const ul = document.querySelector(ulClass); // queryselector recebe a ul
    for(let i = 0; i < arr.length;i++){ // loop para percorrer o array de objetos
        const li = document.createElement('li'); // createelemente para criar a li e img e span
        const img = document.createElement('img');
        img.src = arr[i].imagem //adcionando a url da imagem com o .SRC
        const spanNome = document.createElement('span')
        spanNome.textContent = arr[i].nome  // adcionando o texto com .textcontent
        const spanValor = document.createElement('span')
        spanValor.textContent = arr[i].valor
        spanNome.className = arr[i].classNome
        spanValor.className =arr[i].classValor
        

    
        
        li.appendChild(img)
        li.appendChild(spanNome) // appendchild para adcionar dentro da li e ul 
        li.appendChild(spanValor)
        ul.appendChild(li)

    }
}

createLi(listFigure,'.card_figures')
createLi(listPainting,'.card_Paintings')
