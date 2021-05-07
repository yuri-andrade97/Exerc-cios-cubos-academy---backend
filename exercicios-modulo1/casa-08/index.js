const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;


// Para as pessoas que podem brincar na montanha russa, a tabela de preços é a seguinte:

// 10 reais caso a pessoa seja estudante ou menor de 18 anos (meia entrada)
// 20 reias, caso contrário
// Se papel é imprimir na tela:

// ACESSO NEGADO caso a pessoa não possa brincar
// 10 reais caso esse seja o valor que a pessoa deve pagar para brincar
// 20 reais caso esse seja o valor que a pessoa deve pagar para brincar

if(idade >= 12 && idade <= 65 && possuiPatologia == false && altura >= 150) {
    if(ehEstudante || idade < 18) {
        console.log("10 reais")
    } else {
        console.log("20 reais")
    }
} else {
    console.log("nao pode")
}