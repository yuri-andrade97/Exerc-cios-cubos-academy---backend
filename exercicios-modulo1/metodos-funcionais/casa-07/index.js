const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const frutasModificadas = frutas.map((fruta, indice) => {
   
   const frutasEmMinusculo = fruta.toLowerCase()
   const frutasCapitalize = frutasEmMinusculo[0].toUpperCase() + frutasEmMinusculo.slice(1)

   return `${indice} - ${frutasCapitalize}`

})



console.log(frutasModificadas)