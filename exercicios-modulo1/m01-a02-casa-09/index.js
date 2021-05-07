// C -> Capital | i -> Taxa de Juros | t -> Tempo


const capital = 1000;
const juros = 12.5 / 100;
const tempo = 5;

const montante = capital * Math.pow(1 + juros, 5)

console.log(montante.toFixed(0))
