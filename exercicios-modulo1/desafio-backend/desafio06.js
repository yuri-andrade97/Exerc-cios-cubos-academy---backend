const precos = [150, 150, 150]

function calcularDesconto(precos) {
    let totalAPagar = 0
    
    if(precos.length > 2) {
      let menorValorEncontrado = Math.min(...precos) * 0.5
      totalAPagar = precos.sort((a, b) => a - b)
      totalAPagar.shift(0)
      totalAPagar.push(menorValorEncontrado)
      const somatotalAPagar = totalAPagar.reduce((acc, item) => acc + item)
      console.log(somatotalAPagar)

    } else {
        totalAPagar = precos.reduce((acc, item) => acc + item)
        console.log(totalAPagar)
    }
}



calcularDesconto(precos)