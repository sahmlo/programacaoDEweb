function gerarBotao() {
    const idadeInput = document.getElementById('idadeInput');
    const idade = parseInt(idadeInput.value);

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; // Limpa o conteúdo anterior

    if (isNaN(idade) || idade < 0) {
        resultadoDiv.innerHTML = `
        <p class="idade-invalida">Por favor, digite uma idade válida.</p>
        `;
        return;
    }

    if (idade >= 18) {
        resultadoDiv.innerHTML = `
            <p class="pode-votar">Você tem ${idade} anos é maior de idade e pode votar!</p>
        `;
    } else if (idade >= 16) {
        resultadoDiv.innerHTML = `
            <p class="voto-facultativo">Você tem ${idade} anos e pode votar, mas o voto é facultativo.</p>
        `;
    } else {
        resultadoDiv.innerHTML = `
            <p class="nao-pode-votar">Você tem ${idade} anos e não pode votar ainda.</p>
        `;
    }
}

// Adiciona o evento de clique ao botão
document.getElementById('gerarBotao').addEventListener('click', gerarBotao);