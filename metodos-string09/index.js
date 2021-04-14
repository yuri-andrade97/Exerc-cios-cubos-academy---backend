const nomeArquivo = 'Foto da Familia.pdf';

function validaArquivo(arquivo) {
    if(arquivo.includes("pdf") || arquivo.includes("jpeg") || arquivo.includes("gif") || arquivo.includes("png")) {
        console.log("Arquivo válido")
    } else {
        console.log("Arquivo inválido")
    }
}

validaArquivo(nomeArquivo)