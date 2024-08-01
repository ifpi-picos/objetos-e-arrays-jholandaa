const prompt= require('prompt-sync')();
let filmes = [];
for (let i = 0; i < 5; i++) {
    let filme = prompt(`Digite o nome do filme ${i + 1}:`);
    filmes.push(filme);
}
console.log("Os filmes informados foram:");
for (const filme of filmes) {
    console.log(filme);
}