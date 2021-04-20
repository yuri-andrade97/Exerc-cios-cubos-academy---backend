const array = [1, 2, 3, 4, 5];

const temQuadradoPerfeito = array.some((x) => {
    const raiz = Math.sqrt(x);
    
    if(raiz => 0 && raiz % 1 === 0) {
        return true;
    } else {
        return false;
    }
})

console.log(temQuadradoPerfeito)