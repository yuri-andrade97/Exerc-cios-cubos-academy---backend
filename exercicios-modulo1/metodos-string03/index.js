let identificador = "12345";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

// Identificador
const identificadorPadronizado = identificador.padStart(6, "0");



// Nome
const nomePadronizado = nome.split("")
//console.log(nomePadronizado)
for(let i = 0; i < nomePadronizado.length; i++) {
    if(i == 0) {
        nomePadronizado[0] = nomePadronizado[0].toUpperCase()
    } else if (nomePadronizado[i] == " ") {
        nomePadronizado[i + 1] = nomePadronizado[i + 1].toUpperCase()
    }
}

// email

const emailPadronizado = email.trim();


console.log(identificadorPadronizado);
console.log(nomePadronizado.join(""));
console.log(emailPadronizado);
console.log(tags.join(", "));
