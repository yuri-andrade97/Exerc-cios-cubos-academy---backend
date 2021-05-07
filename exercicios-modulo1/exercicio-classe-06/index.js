const nomes = ["Ana", "Joana", "Carlos", "amanda", "amadeu"];
const soComA = [];

for(nome of nomes) {
    if(nome[0] == "A" || nome[0] == "a") {
        soComA.push(nome);
    }
}

console.log(soComA);