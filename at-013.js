const prompt= require('prompt-sync')();
let filmes = [];
        for (let i = 0; i < 5; i++) {
            let filme = prompt('Digite o nome do filme; ');
            filmes.push(filme);
        }
        console.log("Os filmes informados foram:");
        for (let i = 0; i < filmes.length; i++) {
            console.log(filmes[i]);
        }