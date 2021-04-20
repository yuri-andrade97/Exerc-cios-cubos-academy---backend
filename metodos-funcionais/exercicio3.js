const array = [1, 23, 3, 43, 5, 67, 7, 8, 9, 101];

const temPar = array.some((x) => {
    return x % 2 == 0;
});

console.log(temPar)