const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

// const ate8 = cidades.filter((cidade) => {
//     if(cidade.length <= 8) {
//         return cidade        
//     }
// }).join(", ")

const ate8 = cidades.filter(cidade => cidade.length <= 8).join(", ")

console.log(ate8)
