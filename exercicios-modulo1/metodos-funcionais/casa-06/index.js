const endereços = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

function localizadorDeEndereco(endereco, cep) {
    const localizador = endereco.find((x) => {
        if(cep === x.cep) {
            console.log(x.rua)
        }
    })
}

localizadorDeEndereco(endereços, 00111222)