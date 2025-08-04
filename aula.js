function aplicarDesconto(valor,desconto) {
    return(valor-(valor * (desconto / 100)));

}

function aplicarJuros(valor,juros) {
    return(valor + (valor * 0.1))

}



const preço = 100;
const formadePagamento = 4;

if(formadePagamento === 1) {
console.log(aplicarDesconto(preço,10));
}

else if (formadePagamento === 2) {
console.log(aplicarDesconto(preço,15))
}

else if (formadePagamento === 3) {
console.log(preço);
}
else {
console.log(aplicarJuros(preço,10))    
}

