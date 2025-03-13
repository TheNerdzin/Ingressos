function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtdInput = parseInt(document.getElementById('qtd').value);
    let qtd = parseInt(qtdInput.value);

    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    if (tipo.value == 'pista') {
        compraPista(qtd);
    } else if (tipo.value == 'superior') {
        compraSuperior(qtd);
    } else {
        compraInferior(qtd);
    }
}

function compraPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para o tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function compraSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para o tipo superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function compraInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para o tipo inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}