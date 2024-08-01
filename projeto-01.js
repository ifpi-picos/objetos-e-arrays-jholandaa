const prompt = require('prompt-sync')({sigint: true});
let listaMercado = [];
let running = true;

while (running) {
    let escolha = prompt(
        'Escolha uma opção\n' +
        '1. Adicionar um item\n' +
        '2. Remover um item\n' +
        '3. Verificar itens adicionados\n' +
        '4. Ordenar itens\n' +
        '5. Exibir lista\n' +
        '6. Remover todos os itens\n' +
        '7. Encerrar programa\n'
    );

    if (escolha === '1') {
        let novoItem = prompt('Insira o nome do item a ser adicionado: ');
        listaMercado.push(novoItem);
        console.log(`${novoItem} foi adicionado à lista de compras!`);
    } else if (escolha === '2') {
        let itemRemover = prompt('Digite o nome do produto a ser removido: ');
        let index = listaMercado.indexOf(itemRemover);
        if (index !== -1) {
            listaMercado.splice(index, 1);
            console.log(`${itemRemover} foi removido da lista!`);
        } else {
            console.log(`${itemRemover} não está na lista de compras.`);
        }
    } else if (escolha === '3') {
        let itemPesquisar = prompt('Digite o nome do item que você deseja pesquisar: ');
        if (listaMercado.includes(itemPesquisar)) {
            console.log(`${itemPesquisar} está na lista de compras!`);
        } else {
            console.log(`${itemPesquisar} não está na lista de compras.`);
        }
    } else if (escolha === '4') {
        listaMercado.sort();
        console.log('A lista de compras foi ordenada.');
    } else if (escolha === '5') {
        if (listaMercado.length === 0) {
            console.log('A lista de compras está vazia.');
        } else {
            console.log('A lista de compras:\n' + listaMercado.join('\n'));
        }
    } else if (escolha === '6') {
        listaMercado = [];
        console.log('A lista foi esvaziada!');
    } else if (escolha === '7') {
        running = false;
        console.log('Programa encerrado.');
    } else {
        console.log('Opção inválida. Tente novamente.');
    }
}
