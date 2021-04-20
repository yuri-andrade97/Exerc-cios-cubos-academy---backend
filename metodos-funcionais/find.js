 const texto = "Eu estudo na cubos academy";

 const arrayPalavras = texto.split(" ").find(palavra => {
    return palavra.length > 6;
 });

 console.log(arrayPalavras);