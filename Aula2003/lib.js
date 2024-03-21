function cadastrarVetor(){
    let vetor = [];

    //acessando os valores dos campos do formulário
    let nome = document.getElementById ("nome").value;
    let ValorVenda = document.getElementById ("ValorVenda").value;
   

    //armazenando os valores no vetor
    vetor.push(nome);    
    vetor.push(ValorVenda);    

    //exibindo o vetor preenchido
    console.log("Vetor preenchido", vetor)
}

    function descontoValor(ValorVenda){
        return ValorVenda - (ValorVenda * 0.10)
    }
    
    console.log(nome)