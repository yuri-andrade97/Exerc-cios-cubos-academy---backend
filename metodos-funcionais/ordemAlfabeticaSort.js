const nomes = ["Yuri", "João", "Leninha"]

nomes.sort((a, b) => {
    return a.localeCompare(b);
})

console.log(nomes)