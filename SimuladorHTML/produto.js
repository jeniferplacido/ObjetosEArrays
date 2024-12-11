
class Produto {
    constructor(nome, preco) {
        this.nome = nome.toUpperCase(); // Converte o nome para letras maiúsculas
        this.precoOriginal = parseFloat(preco); // Guarda o preço original
        this.precoComICMS = this.precoOriginal * 1.21; // Calcula o preço com ICMS
        this.vendido = false; // Inicialmente, o produto não foi vendido
    }
}

// Array para armazenar os produtos
const produtos = [];

// Função para adicionar produtos ao array
function adicionarProduto(nome, preco) {
    const novoProduto = new Produto(nome, preco);
    produtos.push(novoProduto); // Adiciona o produto ao array
    exibirProdutos(); // Atualiza a lista exibida
}

// Função para exibir os produtos na tela
function exibirProdutos() {
    const lista = document.getElementById("produtos-lista"); // Pega o elemento onde a lista será exibida
    lista.innerHTML = ""; // Limpa a lista antes de exibir novamente

    produtos.forEach((produto, index) => {
        const divProduto = document.createElement("div");
        divProduto.classList.add("produto-item"); // Adiciona uma classe para estilizar

        // Cria o conteúdo do produto
        divProduto.innerHTML = `
            <p><strong>Nome:</strong> ${produto.nome}</p>
            <p><strong>Preço Original:</strong> R$ ${produto.precoOriginal.toFixed(2)}</p>
            <p><strong>Preço com ICMS:</strong> R$ ${produto.precoComICMS.toFixed(2)}</p>
            <p><strong>Status:</strong> ${produto.vendido ? "Vendido" : "Disponível"}</p>
        `;

        // Adiciona o produto à lista na tela
        lista.appendChild(divProduto);
    });
}

// Lógica para capturar os dados do formulário e adicionar o produto
document.getElementById("form-produto").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário e recarregamento da página

    const nome = document.getElementById("nome").value; // Pega o valor do campo "nome"
    const preco = document.getElementById("preco").value; // Pega o valor do campo "preço"

    if (nome && preco) {
        adicionarProduto(nome, preco); // Adiciona o produto ao array
        this.reset(); // Reseta os campos do formulário
    } else {
        alert("Por favor, preencha todos os campos."); // Exibe uma mensagem caso os campos estejam vazios
    }
});

// Exibe os produtos iniciais (caso existam)
exibirProdutos();
