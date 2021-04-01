const numeros = [3, 40, 1, 85, 11, 7, 5];
let intermediario = numeros[0]

for(numero of numeros) {
    if(numero > intermediario) {
        intermediario = numero;
    }
}

console.log(`O maior número do array é ${intermediario}`);