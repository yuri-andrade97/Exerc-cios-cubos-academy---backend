let jogadores = [
    {
      "nome": "Herman",
      "jogada": 0
    },
    {
      "nome": "Rhodes",
      "jogada": 0
    },
    {
      "nome": "Beach",
      "jogada": 0
    },
    {
      "nome": "Laurel",
      "jogada": 0
    },
    {
      "nome": "Beatrice",
      "jogada": 1
    }
]


const verificacaoZero = jogadores.filter(x => x.jogada == 0)
const verificacaoUm = jogadores.filter(x => x.jogada == 1)


if(verificacaoZero.length === 1) {
  console.log(verificacaoZero[0].nome)
} else if(verificacaoUm.length === 1) {
  console.log(verificacaoUm[0].nome)
}

// const verificacaoZero = jogadores.filter(x => x.jogada == 0)
// const verificacaoUm = jogadores.filter(x => x.jogada == 1)

// if(verificacaoUm.length == 1) {
//     console.log(verificacaoUm[0].nome)

// } else if(verificacaoZero.length === 1) {
//     console.log(verificacaoZero[0].nome)
// }