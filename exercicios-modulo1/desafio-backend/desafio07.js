function solucao(a, b) {

    let x = a;
    let y = b;

    let resto = 1;
    while(resto != 0)  {
        resto = x % y;

        x = y;
        y = resto
    }
    return (a * b) / x;
}

console.log(solucao(12, 15))
// var mmc = function(num1, num2) {
//     var resto, a, b;

//     a = num1;
//     b = num2;

//     do {
//         resto = a % b;

//         a = b;
//         b = resto;

//     } while (resto != 0);

//     return (num1 * num2) / a;
// }
// console.log(mmc(12, 15))

