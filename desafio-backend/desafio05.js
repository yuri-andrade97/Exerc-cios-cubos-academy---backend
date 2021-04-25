const texto = "                                  Cuidado, pois usuarios as   vezes deixam    espacos    vazios no fim do texto      sem querer        "

// usando regex pois se utiliza-se a string " ", só removeria a primeira encontrada, ou os exatos "  "

// metodo trim para retirar os espaços em branco tanto do inicio quanto fim da string 

// metodo split para quebrar a string e fazer um array de palavras

// filter para filtrar os elementos exceto os espaços em branco
const qtdPalavras = texto.trim().split(" ").filter(x => {
    if(x !== "") {
        return true
    }
})

console.log(qtdPalavras.length)
