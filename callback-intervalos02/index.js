const fs = require('fs');

const texto = "Estou aprendendo JavaScript na Cubos Academy"
fs.writeFile("./createdfile.txt", texto, () => {
    console.log("Arquivo criado")
})

// lendo o arquivo
fs.readFile("./createdfile.txt", (err, data) => {
    console.log(data.toString())
})