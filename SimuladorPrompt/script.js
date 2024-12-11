// Classe para representar um produto
class Produto {
    constructor(nome, preco) {
        this.nome = nome.toUpperCase(); // Nome do produto em letras maiúsculas
        this.precoOriginal = parseFloat(preco); // Preço original convertido para número de ponto flutuante
        this.precoComICMS = this.calcularICMS(); // Preço com ICMS calculado e armazenado
    }

    // Método para calcular o preço com ICMS
    calcularICMS() {
        return this.precoOriginal * 1.21; // Adiciona 21% de ICMS ao preço original
    }
}

// Array para armazenar os produtos
const produtos = [];

// Função 1: Entrada de dados
function entradaDados() {
    const nome = prompt("Digite o nome do produto:"); // Pede ao usuário para digitar o nome do produto
    const preco = prompt("Digite o preço do produto (apenas números):"); // Pede ao usuário para digitar o preço do produto

    if (!nome || isNaN(preco)) { // Verifica se o nome está vazio ou se o preço não é um número
        alert("Dados inválidos. Tente novamente."); // Exibe uma mensagem de erro
        return; // Sai da função
    }

    const produto = new Produto(nome, preco); // Cria um novo objeto Produto com os valores fornecidos
    produtos.push(produto); // Adiciona o novo produto ao array de produtos

    alert(`Produto adicionado:\nNome: ${produto.nome}\nPreço Original: R$ ${produto.precoOriginal.toFixed(2)}\nPreço com ICMS: R$ ${produto.precoComICMS.toFixed(2)}`); // Exibe uma mensagem de sucesso com os detalhes do produto
}

// Função 2: Processamento de dados
function listarProdutos() {
    if (produtos.length === 0) { // Verifica se o array de produtos está vazio
        alert("Nenhum produto cadastrado."); // Exibe uma mensagem informando que não há produtos cadastrados
        return; // Sai da função
    }

    console.log("Lista de Produtos:"); // Imprime o título da lista de produtos no console
    produtos.forEach((produto, index) => { // Itera sobre cada produto no array de produtos
        console.log(`Produto ${index + 1}:`); // Imprime o número do produto
        console.log(`Nome: ${produto.nome}`); // Imprime o nome do produto
        console.log(`Preço Original: R$ ${produto.precoOriginal.toFixed(2)}`); // Imprime o preço original do produto formatado com duas casas decimais
        console.log(`Preço com ICMS: R$ ${produto.precoComICMS.toFixed(2)}`); // Imprime o preço com ICMS do produto formatado com duas casas decimais
    });
}

// Função 3: Saída de dados
function exibirProdutosConsole() {
    alert("Os produtos foram exibidos no console. Abra o console para ver os detalhes."); // Exibe uma mensagem informando que os produtos foram exibidos no console
    listarProdutos(); // Chama a função listarProdutos para exibir os produtos no console
}

// Função para controlar o fluxo do simulador
function iniciarSimulador() {
    let continuar = true; // Define a variável continuar como true para manter o loop ativo

    while (continuar) { // Loop principal do simulador
        const opcao = prompt( // Pede ao usuário para escolher uma opção
            "Escolha uma opção:\n1. Adicionar produto\n2. Listar produtos no console\n3. Sair"
        );

        switch (opcao) { // Verifica a opção escolhida pelo usuário
            case "1":
                entradaDados(); // Chama a função entradaDados para adicionar um produto
                break;
            case "2":
                exibirProdutosConsole(); // Chama a função exibirProdutosConsole para listar os produtos no console
                break;
            case "3":
                continuar = false; // Define continuar como false para sair do loop
                alert("Simulador encerrado."); // Exibe uma mensagem informando que o simulador foi encerrado
                break;
            default:
                alert("Opção inválida. Tente novamente."); // Exibe uma mensagem de erro para opção inválida
        }
    }
}

// Inicia o simulador ao carregar o script
iniciarSimulador(); // Chama a função iniciarSimulador para iniciar o simulador