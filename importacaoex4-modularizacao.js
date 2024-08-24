import { adicao, subtracao, multiplicacao, divisao, potenciacao } from './exportacaoex4-modularizacao.js';
const a = 10
const b = 10
console.log(`Soma: ${a} + ${b} = ${adicao(a, b)}`);
console.log(`Subtração: ${a} - ${b} = ${subtracao(a, b)}`);
console.log(`Multiplicação: ${a} * ${b} = ${multiplicacao(a, b)}`);
console.log(`Divisão: ${a} / ${b} = ${divisao(a, b)}`);
console.log(`Exponenciação: ${a} ^ ${b} = ${potenciacao(a, b)}`);