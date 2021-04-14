const cpf = "12.345.678/9012-33";

let removedorDePontuacao = cpf.split("");

console.log(removedorDePontuacao)

for(let i = 0; i < removedorDePontuacao.length; i++) {
    if(removedorDePontuacao[i] == "-" || removedorDePontuacao[i] === "." || removedorDePontuacao[i] === "/") {
        removedorDePontuacao[i] = ""
    }
}
console.log(removedorDePontuacao.join(""))
