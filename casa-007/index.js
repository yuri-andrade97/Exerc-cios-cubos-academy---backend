const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "c"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};


function corrigirProva(prova) {
    let acertos = 0;
    let nota = 0;

    for(let questao of prova.questoes) {
        if(questao.resposta === questao.correta) {
            acertos++;
        } 
    }

    nota = acertos * 2
    if(acertos == 1) {
        console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} questão e obteve a nota ${nota}`)
    } else {
        console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve a nota ${nota}`)
    }
}

corrigirProva(prova)