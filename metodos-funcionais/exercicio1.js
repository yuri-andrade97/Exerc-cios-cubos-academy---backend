const pessoas = [
    {
        nome: "José",
        idade: 30,
        altura: 173
    },
    {
        nome: "Pedro",
        idade: 12,
        altura: 144
    },
    {
        nome: "Maria",
        idade: 38,
        altura: 156
    }
];

const pessoasTransformadas = pessoas.map((pessoa) => {
    return {
        nome: pessoa.nome,
        idade: `${pessoa.idade} anos`,
        altura: `${pessoa.altura/100}m`,
        maioridade: (pessoa.idade >= 18 ? "É maior de idade" : "De menor")
    }
})

console.log(pessoasTransformadas)