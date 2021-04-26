const numeros = [1, 1, 1]
function solucao(numeros) {
    const somaArray = numeros.reduce((a, b) => a + b)
    const resto = somaArray % numeros.length;
    resto == 0 ? console.log(numeros.length) : console.log(resto)
}

solucao(numeros)

