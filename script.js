//lista de items 
let listFigure = [];
let listPainting = [];

// função para criar novos itens

let item = {
    imagem: '',
    nome: '',
    valor: ''
}

function createActionItem(objeto){ // se for action figures
    
    let item = {
        imagem: '',
        nome: '',
        valor: ''
    }
    item.nome = objeto
    

    return listFigure.push(item)
}
createActionItem('goku')
createActionItem('robertin')
createActionItem('tafarel')

console.log(listFigure)


