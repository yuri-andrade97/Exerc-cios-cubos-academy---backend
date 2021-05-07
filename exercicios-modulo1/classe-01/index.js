const jogada1 = "tesoura"
const jogada2 = "tesoura"

if(jogada1 === "pedra") {
    if(jogada2 === "tesoura") {
        console.log(`jogada1 venceu!`)
    } else if(jogada2 === "papel") {
        console.log("jogada2 venceu!")
    } else {
        console.log("empate")
    }
}

else if(jogada1 === "tesoura") {
        if(jogada2 === "pedra") {
            console.log(`jogada1 perdeu!`)
        } else if(jogada2 === "papel") {
            console.log("jogada1 venceu!")
        } else {
            console.log("empate")
        }
}

else if(jogada1 === "papel") {
        if(jogada2 === "tesoura") {
            console.log(`jogada2 venceu!`)
        } else if(jogada2 === "pedra") {
            console.log("jogada1 venceu!")
        } else {
            console.log("empate")
        }
}