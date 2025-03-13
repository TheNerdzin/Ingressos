function sortear(){

    //as variaveis irão aparecer na tela
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    //caso estejam vazias, irá aletar 
    if (!quantidade || !de || !ate) {
        alert('Você precisa informar valores em todos os campos.');
        return;
    }

    //proteção para não dar erro codigo
    if (de >= ate){
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!')
        return;
        
    }

    //isso é uma proteção para não cair no loop, visto que o intervlao numerico sempre incluirá as extremidades
    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
      }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
    
        while (sorteados.includes(numero)) {
          numero = obterNumeroAleatorio(de, ate);
        }
    
        sorteados.push(numero);
      }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    alterarStatusDoBoao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min); 
}

function alterarStatusDoBoao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusDoBoao();
}