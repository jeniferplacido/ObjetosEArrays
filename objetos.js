let fruta = {
    nome: "Maçã", // Propriedade nome da fruta
    cor: "Vermelha", // Propriedade cor da fruta
    peso: 0.5, // Propriedade peso da fruta
    tipo: "Fruta" // Propriedade tipo da fruta
}

fruta.nome = "Banana" // Altera o nome da fruta para "Banana"
fruta.cor = "Amarela" // Altera a cor da fruta para "Amarela"
console.log(fruta) // Imprime o objeto fruta atualizado
console.log(fruta.nome) // Imprime o nome da fruta
console.log(fruta.cor) // Imprime a cor da fruta
console.log(fruta["peso"]) // Imprime o peso da fruta usando notação de colchetes
console.log(fruta["tipo"]) // Imprime o tipo da fruta usando notação de colchetes

// Função que cria os objetos de frutas
function Fruta(nome, cor, peso, tipo) {
    // this define as propriedades para cada objeto
    this.nome = nome
    this.cor = cor
    this.peso = peso
    this.tipo = "Fruta" // Define o tipo como "Fruta" por padrão
}

// new gera um novo objeto com os valores fornecidos
const banana = new Fruta("Banana", "Amarela", 0.7) // Cria um novo objeto Fruta para "Banana"
const maca = new Fruta("Maçã", "Vermelha", 0.5) // Cria um novo objeto Fruta para "Maçã"

// imprime no console os objetos
console.log(banana) // Imprime o objeto banana
console.log(maca) // Imprime o objeto maçã

// Função construtora para criar objetos Pessoa
function Pessoa(nome, idade, rua) {
    this.nome = nome // Define a propriedade nome
    this.idade = idade // Define a propriedade idade
    this.rua = rua // Define a propriedade rua
    this.falar = function() {
        console.log("Olá, meu nome é " + this.nome) // Método que imprime uma saudação com o nome
    }
}

const pessoa1 = new Pessoa("Homer", 35, "Av. Paulista") // Cria um novo objeto Pessoa para "Homer"
const pessoa2 = new Pessoa("Marge", 32, "Av. Paulista") // Cria um novo objeto Pessoa para "Marge"

pessoa1.falar() // Chama o método falar para pessoa1
pessoa2.falar() // Chama o método falar para pessoa2

console.log(pessoa1) // Imprime o objeto pessoa1
console.log(pessoa2) // Imprime o objeto pessoa2

// Função que soma dois números
function somar(a, b) {
    let soma = a + b // Calcula a soma de a e b
    return soma // Retorna o resultado da soma
}

console.log(somar(2, 3)) // Imprime o resultado da soma de 2 e 3

let pessoa = {
    nome: 'Jeni', // Propriedade nome da pessoa
    idade: 34, // Propriedade idade da pessoa
    informacoes: function() {
        console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos") // Método que imprime informações da pessoa
    }
}

pessoa.informacoes() // Chama o método informacoes para o objeto pessoa

console.log(pessoa) // Imprime o objeto pessoa

let texto = "Olá, Coders!" // Declara uma string

console.log(texto.length) // Imprime o comprimento da string
console.log(texto.toLowerCase()) // Imprime a string em letras minúsculas
console.log(texto.toUpperCase()) // Imprime a string em letras maiúsculas

const pessoa3 = {
    nome: "Homer", // Propriedade nome da pessoa
    idade: 35, // Propriedade idade da pessoa
    rua: "Av. Paulista", // Propriedade rua da pessoa
}

console.log("nome" in pessoa3) // Verifica se a propriedade "nome" existe em pessoa3 e imprime o resultado
console.log("origem" in pessoa3) // Verifica se a propriedade "origem" existe em pessoa3 e imprime o resultado

for (const propriedades in pessoa3) {
    console.log(propriedades + ": " + pessoa3[propriedades]) // Itera sobre as propriedades de pessoa3 e imprime cada uma
}