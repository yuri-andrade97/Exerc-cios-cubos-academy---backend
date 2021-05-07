const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];
const time = 10;
const timeForPlay = (time / jogadores.length) * 1000

let contador = 0;
function imprimirJogador() {
    if(contador === jogadores.length) {
        console.log("A rodada terminou!")
        clearInterval(intervalID)
    } else {
        console.log(jogadores[contador])
        contador++
    }
}
imprimirJogador()
const intervalID = setInterval(imprimirJogador, timeForPlay)