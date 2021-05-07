const min = 1;
const max = 1;
const apostas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const apostasAutorizadas = apostas.filter(x => {
    if(x >= min && x <= max) {
        return true
    }
})

console.log(apostasAutorizadas)