const dinheiroQueSobrou = 80;
const valorTenis = 129.99;

const dinheiroQueSobrouEmPorcentagem = (dinheiroQueSobrou * 100) / valorTenis;

console.log(dinheiroQueSobrouEmPorcentagem);

const descontoNecessario = 100 - dinheiroQueSobrouEmPorcentagem

console.log(`O cliente necessita de um cupon de ${descontoNecessario.toFixed(1)}% de desconto`)

