class BancoDeDadosUsuarios {
    constructor() {
        this.usuarios = [];
    }

    adicionarUsuario(nome, email, senha) {
        if (this.usuarios.some(usuario => usuario.email === email)) {
            console.log('Já existe um usuário com esse e-mail.');
            return;
        }
        this.usuarios.push({ nome, email, senha });
        console.log('Usuário adicionado!');
    }

    removerUsuario(email) {
        const indice = this.usuarios.findIndex(usuario => usuario.email === email);
        if (indice === -1) {
            console.log('Usuário não encontrado.');
            return;
        }
        this.usuarios.splice(indice, 1);
        console.log('Usuário removido.');
    }

    atualizarUsuario(email, novoNome, novaSenha) {
        const usuario = this.usuarios.find(usuario => usuario.email === email);
        if (!usuario) {
            console.log('Usuário não encontrado.');
            return;
        }
        if (novoNome) usuario.nome = novoNome;
        if (novaSenha) usuario.senha = novaSenha;
        console.log('Informações atualizadas!');
    }

    obterTodosUsuarios() {
        return [...this.usuarios];
    }
}

export default BancoDeDadosUsuarios;
