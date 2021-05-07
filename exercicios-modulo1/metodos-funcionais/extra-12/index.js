const notas = [6, 20, 33, 454, 8, 9, 9, 6, 8, 9, 20, 20, 33]

const notasNaoRepetidas = [];

notas.forEach(nota => {
    if(!notasNaoRepetidas.find(element => element === nota)) {
        notasNaoRepetidas.push(nota)
    }
});


console.log(notasNaoRepetidas)