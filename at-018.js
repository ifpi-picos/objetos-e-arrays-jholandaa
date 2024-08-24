const carro1 = {
    ano: 2015,
    nome: 'Onix',
}
const carro2 = {
    ano: 2020,
    nome: 'cruze',
}
const carro3 = {
    ano: 2005,
    nome: 'Fusca',
}
const carros = [carro1, carro2, carro3]
const carrosNovos = carros.filter(function(carro) {
    return carro.ano > 2010;
});
console.log(carrosNovos)