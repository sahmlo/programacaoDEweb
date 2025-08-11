document.getElementById('gerarBotao').addEventListener('click', somarNumeros);

function somarNumeros() {
    const numero1 = parseFloat(document.getElementById('numero1').value) || 0;
    const numero2 = parseFloat(document.getElementById('numero2').value) || 0;

    const soma = numero1 + numero2;

    document.getElementById('resultado').textContent = `Resultado: ${soma}`;
}