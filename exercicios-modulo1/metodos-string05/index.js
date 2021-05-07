const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

let listaInversa = frutas.reverse().join(", ");
console.log(listaInversa);

let newList = frutas;
newList.reverse().shift();
console.log(newList)

newList.pop()
console.log(newList)

newList.push('Melão')
console.log(newList)