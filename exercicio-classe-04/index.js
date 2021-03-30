const original = [1, 4, 12, 21, 53, 88, 112];
const soPar = [];


for(let i = 0; i <= original.length; i++) {
    if(original[i] % 2 == 0) {
        soPar.push(original[i]);
    }
}

console.log(soPar)