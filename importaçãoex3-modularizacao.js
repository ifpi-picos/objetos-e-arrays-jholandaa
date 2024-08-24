function adicao (a, b){
    return a + b;
};
function subtracao(a, b) {
    return a - b;
};
function multiplicacao (a, b) {
    return a * b;
};
function divisao(a, b) {
    if (b === 0) {
        console.log('Não é possivel dividir por zero.')
} 
return (a / b);
}
function potenciacao (base, expoente){
   return Math.pow(base, expoente);
}

module.exports = {
    adicao,
    subtracao,
    multiplicacao,
    divisao,
    potenciacao
};
