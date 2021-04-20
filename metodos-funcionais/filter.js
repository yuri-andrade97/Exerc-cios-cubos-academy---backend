 const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 
//  const arrayFIltrado = array.filter((x) => {
//     if(x > 5) {
//         return true
//     } else {
//         return false
//     }
//  });

// metodo curto ( refatorando)
const arrayFIltrado = array.filter((x) => x > 5 ? true : false)

 console.log(arrayFIltrado)