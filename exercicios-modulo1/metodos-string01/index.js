const comentario = "Esse pandemia é muito perigoso!";
const comentarioConvertido = comentario.toUpperCase();

const palavraProibida = "COVID";
const palavraProibida2 = "PANDEMIA";

if(comentarioConvertido.includes("COVID") || comentarioConvertido.includes("PANDEMIA")) {
    console.log("Comentário bloqueado por conter palavras proibidas")
} else {
    console.log(comentarioConvertido)
}