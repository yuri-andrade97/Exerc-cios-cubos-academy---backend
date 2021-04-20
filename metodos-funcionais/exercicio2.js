const lista = [2100, 1000, 5512, 9879];

const ehValido = lista.every((x) => {
    const ehInteiro = x % 1 == 0;
    const ehPositivo = x >= 0;

    if(ehInteiro && ehPositivo) {
        return true;
    } else {
        return false;
    }
})

console.log(ehValido)