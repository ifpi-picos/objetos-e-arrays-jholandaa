const operacoesMatematicas = require('./importação.js')
const a = 10
const b = 10
const base = 10
const expoente = 10
console.log(`Soma: ${a} + ${b} = ${operacoesMatematicas.adicao(a, b)}`);
console.log(`Subtração: ${a} - ${b} = ${operacoesMatematicas.subtracao(a, b)}`);
console.log(`Multiplicação: ${a} * ${b} = ${operacoesMatematicas.multiplicacao(a, b)}`);
console.log(`Divisão: ${a} / ${b} = ${operacoesMatematicas.divisao(a, b)}`);
console.log(`Exponenciação: ${a} ^ ${b} = ${operacoesMatematicas.potenciacao(a, b)}`);
