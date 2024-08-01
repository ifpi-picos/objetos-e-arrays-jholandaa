const prompt = require('prompt-sync')({sigint: true});

let filmesParaAssistir = [];
let filmesAssistidos = [];

function adicionarFilme() {
    const titulo = prompt('Digite o título do filme: ');
    const ano = prompt('Digite o ano de lançamento do filme: ');
    filmesParaAssistir.push({ titulo, ano });
    console.log(`Filme "${titulo}" adicionado à lista.\n`);
}

function ordenarLista() {
    const criterio = prompt('Ordenar por título ou ano? ').toLowerCase();
    filmesParaAssistir.sort((a, b) => 
        criterio === 'ano' ? a.ano - b.ano : a.titulo.localeCompare(b.titulo)
    );
}

function pesquisarFilme() {
    const titulo = prompt('Digite o título do filme: ').toLowerCase();
    const encontrado = filmesParaAssistir.some(filme => filme.titulo.toLowerCase() === titulo);
    console.log(encontrado ? `Filme "${titulo}" está na lista.\n` : `Filme "${titulo}" não encontrado.\n`);
}

function exibirListas() {
    console.log('Filmes para assistir:', filmesParaAssistir);
    console.log('Filmes já assistidos:', filmesAssistidos, '\n');
}

function marcarComoAssistido() {
    const titulo = prompt('Digite o título do filme: ').toLowerCase();
    const index = filmesParaAssistir.findIndex(filme => filme.titulo.toLowerCase() === titulo);
    if (index !== -1) {
        filmesAssistidos.push(...filmesParaAssistir.splice(index, 1));
        console.log(`Filme "${titulo}" marcado como assistido.\n`);
    } else {
        console.log(`Filme "${titulo}" não encontrado.\n`);
    }
}

function removerFilme() {
    const titulo = prompt('Digite o título do filme: ').toLowerCase();
    const index = filmesParaAssistir.findIndex(filme => filme.titulo.toLowerCase() === titulo);
    if (index !== -1) {
        filmesParaAssistir.splice(index, 1);
        console.log(`Filme "${titulo}" removido da lista.\n`);
    } else {
        console.log(`Filme "${titulo}" não encontrado.\n`);
    }
}

function gerenciarListaDeFilmes() {
    while (true) {
        console.log('1. Adicionar filme\n2. Ordenar lista\n3. Pesquisar filme\n4. Exibir listas\n5. Marcar como assistido\n6. Remover filme\n7. Sair');
        const opcao = parseInt(prompt('Escolha uma opção: '));
        
        if (opcao === 1) adicionarFilme();
        else if (opcao === 2) ordenarLista();
        else if (opcao === 3) pesquisarFilme();
        else if (opcao === 4) exibirListas();
        else if (opcao === 5) marcarComoAssistido();
        else if (opcao === 6) removerFilme();
        else if (opcao === 7) break;
        else console.log('Opção inválida.\n');
    }
}

gerenciarListaDeFilmes();
