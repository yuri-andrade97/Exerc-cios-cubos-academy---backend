const lista = [12, 8, 70, 20, 65];
const maiorIdade = 18;


const soDeMaior = lista.filter(x => x >= maiorIdade)

if(soDeMaior.length === 0) {
    console.log("CRESCA E APARECA")
} else {
    const caculaEntreOsAdultos = soDeMaior.sort((a, b) => a - b)
    console.log(caculaEntreOsAdultos[0])
}
