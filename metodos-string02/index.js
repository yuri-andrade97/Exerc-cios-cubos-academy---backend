const cpf = "85776925584";
const cnpj = "16789478542360";

const quantidadeDeDigitosCpf = cpf.split("");


function validarEFormatarCpf(cpf) {
    if(quantidadeDeDigitosCpf.length === 11 ) {
       // console.log(cpf)
        let formatandoCpf = cpf.split("");
            //console.log(formatandoCpf)
            formatandoCpf.splice(3, 0 ,".")
            formatandoCpf.splice(7, 0, ".")
            formatandoCpf.splice(11, 0, "-")
            //console.log(formatandoCpf)

        const cpfFormatado = formatandoCpf.join("")

        console.log(cpfFormatado)

    } else {
        console.log("CPF Inválido")
    }
}

const quantidadeDeDigitosCnpj = cnpj.split("")


function validarEFormatarCnpj(cnpj) {
    if(quantidadeDeDigitosCnpj.length === 14) {
        let formatandoCnpj = quantidadeDeDigitosCnpj;
            formatandoCnpj.splice(2, 0, ".")
            formatandoCnpj.splice(6, 0, ".")
            formatandoCnpj.splice(10, 0, "/")
            formatandoCnpj.splice(15, 0, "-")
        
        const cnpjFormatado = formatandoCnpj.join("")


        console.log(cnpjFormatado)
    } else {
        console.log("CNPJ Inválido")
    }
}

validarEFormatarCpf(cpf);
validarEFormatarCnpj(cnpj);
