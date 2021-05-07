const comanda = {
    nome: "Yuri",
    idade: 24,
    produtos: [
        {
            nome: "coxinha",
            preco: 400,
            quantidade: 3
        }, 
        {
            nome: "pastel",
            preco: 450,
            quantidade: 2
        },
        {
            nome: "refrigerante",
            preco: 600,
            quantidade: 1
        }
    ]
    
};

let totalAPagar = 0;
for(let item of comanda.produtos) {
    totalAPagar += (item.quantidade * item.preco);
}

console.log(`${comanda.nome}, o valor total a pagar é de R$ ${totalAPagar / 100} reais`);

console.log(comanda.nome);
console.log(comanda.idade);

comanda.idade = 30;

console.log(comanda.idade);

console.log(comanda.produtos[0].nome);

console.log(comanda.produtos[comanda.produtos.length -1].preco)