const pessoa = {
    nome: "Yuri",
    idade: 24,
    altura: 1.92,
    temCNH: true,
    apelidos: ["ton", "cabeça"]
};

let textoCNH = "";
if(pessoa.temCNH) {
    textoCNH = "possui";
} else {
    textoCNH = " não possui"
}

console.log(`${pessoa.nome} tem ${pessoa.altura}m de altura ${textoCNH} CNH e os seguintes apelidos:`);

for(let apelidos of pessoa.apelidos) {
    console.log(`-- ${apelidos}`);
}
