const pessoas = [
    {
        nome: 'Antonio',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Maria',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Ana',
        idade: 21,
        profissao: 'Programador'
    },
    {
        nome: 'Beatriz',
        idade: 20,
        profissao: 'Programador'
    },
    {
        nome: 'José',
        idade: 32,
        profissao: 'Jornalista'
    },
    {
        nome: 'Marcos',
        idade: 30,
        profissao: 'Programador'
    }
];

const soProgramadorMaiorDe20 = pessoas.filter(pessoa => pessoa.profissao == 'Programador' && pessoa.idade > 20)

const soJornalistaMaiorDe30 = pessoas.filter(pessoa => pessoa.profissao == 'Jornalista' && pessoa.idade > 30)

const jornalistasEProgramadoresJovens = pessoas.filter(pessoa => (pessoa.profissao == 'Jornalista' || pessoa.profissao === 'Programador') && pessoa.idade <= 29)


console.log(soProgramadorMaiorDe20)
console.log("")
console.log(soJornalistaMaiorDe30)
console.log("")
console.log(jornalistasEProgramadoresJovens)