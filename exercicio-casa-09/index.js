const original = [3, 9, 10, 11, 20, 114, 118, 245];

const newArray = [];

for(numero of original) {
    if(numero >= 10 && numero <= 20) {
        newArray.push(numero);
    } else if(numero > 100) {
        newArray.push(numero);
    }
}

console.log(newArray);