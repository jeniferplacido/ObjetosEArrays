let fruta ={
    nome: "Maça",
    cor: "Vermelha",
    peso: 0.5,
    tipo: "Fruta"
}

fruta.nome = "Banana"
fruta.cor = "Amarela"
console.log(fruta)
console.log(fruta.nome)
console.log(fruta.cor)
console.log(fruta["peso"])
console.log(fruta["tipo"])


// Função que cria os objetos de frutas
function Fruta(nome, cor, peso, tipo){
    // this define as propriedades para cada objeto
    this.nome = nome
    this.cor = cor
    this.peso = peso
    this.tipo = "Fruta"
}
// new gera um novo objeto com os valores fornecidos
const banana = new Fruta("Banana", "Amarela", 0.7)
const maca = new Fruta("Maça", "Vermelha", 0.5)

// imprime no console os objetos
console.log(banana)
console.log(maca)

function Pessoa(nome, idade, rua){
    this.nome = nome
    this.idade = idade
    this.rua = rua
    this.falar = function(){
        console.log("Olá, meu nome é " + this.nome)
    }
}

const pessoa1 = new Pessoa("Homer", 35, "Av. Paulista")
const pessoa2 = new Pessoa("Marge", 32, "Av. Paulista")

pessoa1.falar()
pessoa2.falar()

console.log(pessoa1)
console.log(pessoa2)

function somar(a, b){
    let soma = a + b
    return soma
}

console.log(somar(2, 3))

let pessoa ={
    nome: 'Jeni',
    idade: 34,
    informacoes: function(){
        console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos")
    }
}

pessoa.informacoes()

console.log(pessoa)

let texto = "Olá, Coders!"

console.log(texto.length)
console.log(texto.toLowerCase())
console.log(texto.toUpperCase())

const pessoa3 = {
    nome: "Homer", 
    idade: 35,
    rua: "Av. Paulista",
}

console.log("nome" in pessoa3)
console.log("origem" in pessoa3)

for( const propriedades in pessoa3){
    console.log(propriedades + ": " + pessoa3[propriedades])
}