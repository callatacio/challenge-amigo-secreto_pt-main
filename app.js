//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const nomes = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    if (nomes.includes(nome)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    nomes.push(nome);
    atualizarLista();
    input.value = '';
}

function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    nomes.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nomes.length < 2) {
        alert('Adicione pelo menos dois nomes para realizar o sorteio.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const amigoSorteado = nomes[indiceSorteado];

    document.getElementById('resultado').textContent = `Amigo Secreto: ${amigoSorteado}`;
}