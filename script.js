function obterValores() {
    return {
        valorImovel: parseFloat(document.getElementById("valorImovel").value),
        prazoFinanciamento: parseInt(document.getElementById("prazoFinanciamento").value),
        taxaJuros: parseFloat(document.getElementById("taxaJuros").value)
    };
}

function validarValores(valores) {
    return !(isNaN(valores.valorImovel) || isNaN(valores.prazoFinanciamento) || isNaN(valores.taxaJuros) || 
             valores.valorImovel <= 0 || valores.prazoFinanciamento <= 0 || valores.taxaJuros < 0);
}

function calcularPagamentoMensal(valorImovel, prazoFinanciamento, taxaJuros) {
    let taxaMensal = (taxaJuros / 100) / 12;
    let meses = prazoFinanciamento * 12;
    return valorImovel * taxaMensal * Math.pow(1 + taxaMensal, meses) / (Math.pow(1 + taxaMensal, meses) - 1);
}

function calcularFinanciamento() {
    let valores = obterValores();

    if (!validarValores(valores)) {
        alert("Por favor, insira valores válidos");
        return;
    }

    let pagamentoMensal = calcularPagamentoMensal(valores.valorImovel, valores.prazoFinanciamento, valores.taxaJuros);
    let totalPagamento = pagamentoMensal * (valores.prazoFinanciamento * 12);

    exibirResultados(pagamentoMensal, totalPagamento);

}

function exibirResultados(pagamentoMensal, totalPagamento) {
    document.getElementById("resultado").innerHTML = `
        <strong>Pagamento Mensal:</strong> R$${pagamentoMensal.toFixed(2)}<br>
        <strong>Pagamento Total:</strong> R$${totalPagamento.toFixed(2)}
    `;
}
function limparCampos() {
    document.getElementById("valorImovel").value = "";
    document.getElementById("prazoFinanciamento").value = "";
    document.getElementById("taxaJuros").value = "";
    document.getElementById("resultado").innerHTML = "";
}