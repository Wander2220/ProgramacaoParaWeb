function descontoAvista(ValorVenda){
    return ValorVenda - (ValorVenda * 0.10)
}
function desconto3x(ValorVenda){
    return ValorVenda + (ValorVenda * 0.05)
}
function desconto4ouMais(ValorVenda){
    return ValorVenda + (ValorVenda * 0.10)
}

function exibirParcelas(ValorVenda, QntParcelas){
    for(let i=0; i<QntParcelas; i++){
        const resultado = (ValorVenda / QntParcelas);
        document.getElementById('resultado').innerHTML += `<br>${i+1}º parcela ${resultado}`;
    }
}

function mostrarResultado() {

    const ValorVenda = parseFloat(document.getElementById('ValorVenda').value);
    const QntParcelas = parseFloat(document.getElementById('QntParcelas').value);
    
    if (QntParcelas == 1){

        var resultado = descontoAvista(ValorVenda, QntParcelas);
        document.getElementById('resultado').innerHTML = `<br>O valor da venda é: ${resultado}`;

    } else if(QntParcelas <= 3){
       var resultado = desconto3x(ValorVenda, QntParcelas);
        document.getElementById('resultado').innerHTML = `<br>O valor da venda é: ${resultado}`;
    }
    else{
        var resultado = desconto4ouMais(ValorVenda, QntParcelas);
        document.getElementById('resultado').innerHTML = `<br>O valor da venda é: ${resultado}`;
    }
    exibirParcelas(resultado, QntParcelas)
}







