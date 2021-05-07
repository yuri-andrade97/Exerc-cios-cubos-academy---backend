//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "cheque";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;


if(tipoDePagamento === "credito") {
    const desconto = valorDoProduto * 0.05;
    const valorFinal = (valorDoProduto - desconto) / 100;
    console.log(valorFinal.toFixed(2))

} else if(tipoDePagamento === "cheque") {
    const desconto = valorDoProduto * 0.03;
    const valorFinal = (valorDoProduto - desconto) / 100;
    console.log(valorFinal.toFixed(2))
}
