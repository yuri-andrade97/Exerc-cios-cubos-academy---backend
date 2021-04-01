const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

const limiteDeDentro = 5;

i=filaDeDentro.length

if(filaDeDentro.length <= limiteDeDentro) {

    for(let i = 0; i < filaDeFora.length; i++) {
        filaDeDentro.push(filaDeFora[0]);
        filaDeFora.shift(filaDeFora[0]);
    }

}

console.log(filaDeDentro)
console.log(filaDeFora)