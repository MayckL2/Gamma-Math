function calcular(equacao) {
    const operacao = equacao;
    
    const sinaisOperacionais = ['+', '-', '*', '/', '.', '%'];

    const posicaoDaBarra = operacao.indexOf('/');

    if (posicaoDaBarra !== -1) {
        if (operacao[posicaoDaBarra + 1] == '0'){
            alert('Impossível realizar divisão por ZERO');
            return false;
        }
    }

    const caracterFinal = operacao[operacao.length - 1];
    if (sinaisOperacionais.includes(caracterFinal)){
        alert('Espressão inválida');
        return false;
    } 
        // if (operacao.includes('%')){

        //     var operacaoComposta = false;

        //     for (var i = 0; i < operacao.length; i++){
        //         if (sinaisOperacionais.includes(operacao[i])){
        //             operacaoComposta = true;
        //         }
        //     }

        //     if (operacaoComposta){
        //         var possuiSinalAntesDaPorcentagem = false;
        //         const posicaoDaPorcentagem = operacao.indexOf('%');

        //         for (var j = posicaoDaPorcentagem; j > 0; j--){
        //             if (sinaisOperacionais.includes(operacao[j])){
        //                 possuiSinalAntesDaPorcentagem = true;
        //             }
        //         }

        //         if (possuiSinalAntesDaPorcentagem){
        //             for (k = posicaoDaPorcentagem; k > 0; k--){
        //                 if (sinaisOperacionais.includes(operacao[k])){
        //                     const insercaoParentesesAberto = operacao.indexOf(operacao[k]) + 1;
        //                     const resu = operacao.slice(0, insercaoParentesesAberto) + "(" + operacao.slice(insercaoParentesesAberto);
        //                     encontrouSinal = true;
        //                 }
        //             }

        //         } else {
        //             const resu = "(" + operacao;
        //             alert(resu);
        //         }

        //     }
        // }
    if (operacao.includes("%")){
        const substituicaoDaPorcentagem = operacao.replace(/%/g, "*");
        const resul = "(" + substituicaoDaPorcentagem + ") / 100";

        const resultado = eval(resul);

        const retorno = resultado.toString();

        return retorno;
    } else {

        const resultado = eval(operacao);

        const retorno = resultado.toString();

        return retorno;
    }

}

    
function backspace (string) {
    var operacao = string;
    const mudanca = operacao.slice(0, -1);

    return mudanca;
}


export { calcular, backspace };