// ordenar em ordem decrescente ( maior para o menor )
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

array.sort((a, b) => {
    if(a > b) {
        return -1
    } else {
        return 1
    }
})

console.log(array)