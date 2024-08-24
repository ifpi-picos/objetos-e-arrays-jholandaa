const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const calcularLogaritmo = (numero, base) => {
    return Math.log(numero) / Math.log(base);
};
rl.question('Digite um número para calcular o logaritmo: ', (numero) => {
    rl.question('Digite a base do logaritmo (deixe em branco para base 10): ', (base) => {
        numero = parseFloat(numero);
        base = base === '' ? 10 : parseFloat(base);
        const resultado = calcularLogaritmo(numero, base);
        console.log(`O logaritmo de ${numero} na base ${base} é ${resultado}`);
        rl.close();
    });
});
