const { v4: uuidv4 } = require('uuid');
let listaDeProdutos = [
    {
        id: uuidv4(),
        nome: 'Cama confort - animal print',
        preco: 101.00,
        pet: 'Gatos e Cachorros',    
        Imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1W6mI_nsgx-1YfRPSs-lJxpiDWprE-WbcyQD2HVLTff-97yvmeqqqkyYo_ZP8PRinvJcd6Ee&usqp=CAc',
    },
];

function cadastrarProduto(nome, preco, pet, imagem) {
    const novoProduto = {
        id: uuidv4(),
        nome,
        preco,
        pet,
        imagem,
    };
    
    return listaDeProdutos.push(novoProduto);
}

function excluirProduto(id) {
    const novaListaDeProdutos = listaDeProdutos.filter(
        (produto) => produto.id != id
    );

    if (novaListaDeProdutos.length >= listaDeProdutos.length) return false;

    listaDeProdutos = novaListaDeProdutos;

    return true;
}

module.exports = { listaDeProdutos, cadastrarProduto, excluirProduto };