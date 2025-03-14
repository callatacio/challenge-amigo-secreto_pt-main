# Amigo Secreto

Aplicação web simples para realizar sorteios de "Amigo Secreto", permitindo aos usuários adicionar nomes a uma lista e sortear um participante aleatoriamente.

## Funcionalidades

- **Adicionar nomes:**
    - Os usuários inserem o nome de um amigo em um campo de texto e o adicionam à lista ao clicar no botão "Adicionar".
    - Validação de entrada: Caso o campo esteja vazio, um alerta será exibido solicitando a inserção de um nome válido.

- **Visualizar a lista:**
    - Os nomes inseridos são exibidos em uma lista logo abaixo do campo de entrada.

- **Sorteio aleatório:**
    - Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na tela.
    - Validação no sorteio: Caso a lista esteja vazia ou só exista um nome na lista, um alerta será exibido solicitando a inserção de pelo menos dois nomes para realizar o sorteio.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

## Como Executar o Projeto

1. Clone o repositório para sua máquina local:

    ```bash
    git clone https://github.com/callatacio/challenge-amigo-secreto_pt-main.git
    ```

2. Acesse o diretório do projeto:

    ```bash
    cd amigo-secreto
    ```

3. Abra o arquivo `index.html` em seu navegador preferido.

## Estrutura do Projeto

```
.
├── assets
    ├── amigo-secreto.png
    ├── play_circle_outline.pne
├── index.html
├── style.css
└── script.js
```

## Melhorias Futuras

- Permitir a exclusão de nomes da lista.
- Implementar o sorteio sem repetição de nomes.
- Salvar a lista de participantes no armazenamento local (localStorage).

## Sobre o Projeto

Este projeto foi desenvolvido como parte do **Challenge** do programa **ONE - Oracle Next Education**.

---

Feito com ❤️ por [Callatacio](https://github.com/callatacio/challenge-amigo-secreto_pt-main).


