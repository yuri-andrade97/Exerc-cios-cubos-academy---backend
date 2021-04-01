const letras = ["A", "a", "B", "a", "a", "z"];
let qtdLetraE = 0;

for(letra of letras) {
    if(letra === "E" || letra === "e") {
        qtdLetraE++;
    };
};

if(qtdLetraE == 0) {
    console.log('Nenhuma letra "E" ou "e" foi encontrada');
} else if(qtdLetraE == 1) {
    console.log(`Foi somente encontrado ${qtdLetraE} letra "E" ou "e".`);
} else {
    console.log(`Foram encontradas ${qtdLetraE} letras "E" ou "e".`);
}
