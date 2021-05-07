const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 0;

function localizaCarro(carros, posicao) {
    let escolhidos = carros.slice(posicao, posicao + 3).join(" - ")
    console.log(escolhidos)
}

localizaCarro(nomes, posicao);
