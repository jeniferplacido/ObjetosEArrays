class produto{
    constructor(nome, preco){
        this.nome = nome.toUpperCase()
        this.preco = parseFloat(preco)
        this.vendido = false
    }
    somaICMS(){
        this.preco = this.preco * 1.21
    }
}

const produtos = []
produtos.push(new produto("Arroz", "125"))
produtos.push(new produto("Pão", "50"))
produtos.push(new produto("Macarrao", "70"))

for(const produto of produtos){
    produto.somaICMS()
    console.log(produtos)
}