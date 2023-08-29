function calcular(equacao) {
    const operacao = equacao;
    const sinaisOperacionais = ['+', '-', '*', '/', '.'];

    const posicaoDaBarra = operacao.indexOf('/');

    if (posicaoDaBarra !== -1) {
        if (operacao[posicaoDaBarra + 1] == '0'){
            alert('Impossível realizar divisão por ZERO');
            return false;
        }
    } else {
        const caracterFinal = operacao[operacao.length - 1];
        if (sinaisOperacionais.includes(caracterFinal)){
            alert('Espressão inválida');
            return false;
        } else {

            const resultado = eval(operacao);
    
            const retorno = resultado.toString();
    
            return retorno;
        }

    }

}
    
    // Retorna true se o número de parênteses abertos e fechados for igual


export { calcular };