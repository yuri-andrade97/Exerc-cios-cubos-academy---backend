const pessoas = [
    {
        nome: "Yuri",
        idade: 31
    },
    {
        nome: "Leninha",
        idade: 31
    },
    {
        nome: "João",
        idade: 10
    }
]

pessoas.sort((a, b) => {
    if(a.idade < b.idade) {
        return -1
    } else if(b.idade < a.idade) {
        return 1
    } else if(a.idade === b.idade) {
        return a.nome.localeCompare(b.nome)
    }
})

console.log(pessoas)