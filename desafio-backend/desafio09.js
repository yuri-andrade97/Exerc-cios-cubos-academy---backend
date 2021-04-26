function solucao(min, km) {
    
    let totalAPagar = 0;
    let valorPorMinuto = 0.50;
    let valorPorKM = 0.70;


    if(min <= 20 && km <= 10) {
        totalAPagar = (min * valorPorMinuto) + (km * valorPorKM)
    }else if(min <= 20 && km > 10) {
        totalAPagar = (min * valorPorMinuto) + ((km - 10) * 0.5) + (10 * valorPorKM)
    } else if(min > 20 && km <= 10) {
        totalAPagar = ((min - 20) * 0.30) + (20 * valorPorMinuto) + (km * 0.70)
    } else if(min > 20 && km > 10) {
        totalAPagar = ((min - 20) * 0.30) + (20 * valorPorMinuto) + ((km - 10) * 0.5) + (10 * valorPorKM)
    }
    return totalAPagar * 100

}


console.log(solucao(25, 11.5))