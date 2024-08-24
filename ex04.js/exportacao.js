export function adicao(a, b) {
    return a + b 
};
export function subtracao(a, b) {
    return a - b 
};
export function multiplicacao(a, b) {
    return a * b
};
export function divisao(a, b){
    if (b === 0) {
        console.log('Não é possivel dividir por zero.')
    }
return a / b;
}
export function potenciacao (base, expoente){
return Math.pow(base, expoente)
}