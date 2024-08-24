import BancoDeDadosUsuarios from './ex5-modularizacao.js';
const banco = new BancoDeDadosUsuarios();
banco.adicionarUsuario('João Silva', 'joaozin@gmail.com', 'senha123');
banco.adicionarUsuario('Maria Silveira', 'mariazinha10@gmail.com', 'soulinda');
console.log(banco.obterTodosUsuarios());
banco.atualizarUsuario('joaozin@gmail.com', 'João Silva Neto', 'novaSenha123')
console.log(banco.obterTodosUsuarios());
banco.removerUsuario('mariazinha10@gmail.com')
console.log(banco.obterTodosUsuarios());
