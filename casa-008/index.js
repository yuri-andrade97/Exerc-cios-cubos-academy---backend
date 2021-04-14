let carro = {
    ligado: true,
    velocidade: 0,
    ligar: function () {
        if(this.ligado) {
            const resposta = "Carro já está ligado";
            return resposta
        } else {
            this.ligado = true;
            return this.ligado;
        }
    },
    desligar: function () {
        if(this.ligado === false) {
            const resposta = "Carro já está desligado";
            return resposta;
        } else {
            this.ligado = false;
            this.velocidade = 0;
            return this.ligado
        }
    },
    acelerar: function () {
        if(this.ligado) {
            this.velocidade += 10;
            return this.velocidade
        } else {
            return "Não é possível acelerar um carro desligado."
        }
    },
    desacelerar: function () {
        if(this.ligado) {
            this.velocidade -= 10;
            return this.velocidade;
        } else {
            return "Não é possível desacelerar um carro desligado"
        }
    },
}

function checarMudancaNoObjeto(carro) {
    let ligadoOuDesligado = carro.ligado
    let velocidade = carro.velocidade

    let testeLigadoOuDesligado = false;
    let testeVelocidade = 0;

    if(ligadoOuDesligado !== testeLigadoOuDesligado || velocidade !== testeVelocidade) {
        carro.ligado = testeLigadoOuDesligado;
        carro.velocidade = testeVelocidade;
        if(testeLigadoOuDesligado === true) {
            console.log(`Carro ligado. Velocidade: ${carro.velocidade}`)
        } else {
            console.log(`Carro desligado. Velocidade: ${carro.velocidade}`)
        }
    }
}

checarMudancaNoObjeto(carro)


console.log(carro.desligar())
console.log(carro.ligar())
console.log(carro.ligar())
console.log(carro.acelerar())
console.log(carro.acelerar())
console.log(carro.desacelerar())
console.log(carro.desligar())
console.log(carro.acelerar())
console.log(carro.desacelerar())
checarMudancaNoObjeto(carro)
