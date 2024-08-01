const p1 = {
    nome: 'Roberto',
    idade: 13,
}
const p2 = {
    nome: 'Rubens',
    idade: 17,
}
const p3 = {
    nome : 'Juliana',
    idade: 20,
}
const p4 = {
    nome: 'Ysis',
    idade: 10,
}
const pessoas = [p1, p2, p3, p4]
const pMaiordeIdade = pessoas.find(function(pessoas) {
return pessoas.idade > 18;
})
console.log(pMaiordeIdade)


