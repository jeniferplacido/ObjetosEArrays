// array vazia
const array1 = [] // Declara um array vazio

// array de números
const array2 = [1, 2, 3, 4, 5] // Declara um array de números

// array de strings
const array3 = ["a", "b", "c", "d"] // Declara um array de strings

// array de booleanos
const array4 = [true, false, true, false] // Declara um array de booleanos

// array de tipos diferentes
const array5 = ["a", 1, true] // Declara um array com diferentes tipos de dados

// imprimindo os arrays no console
console.log(array1, array2, array3, array4, array5) // Imprime todos os arrays no console
console.log(array2[0], array3[1], array4[2], array5[1]) // Imprime elementos específicos dos arrays

// for ( let index = 0; index < array2.length; index++){
//     console.log(array2[index])
// } // Código comentado que itera sobre array2 e imprime cada elemento

const meuArray = ["rosa", "verde", "amarelo", "azul", "branco"] // Declara um array de cores

console.log("Tamanho do meu array: " + meuArray.length) // Imprime o tamanho do array

for (let i = 0; i < meuArray.length; i++) {
    console.log(meuArray[i]) // Itera sobre o array e imprime cada cor
}

meuArray.push("preto") // Adiciona "preto" ao final do array
console.log(meuArray.length) // Imprime o novo tamanho do array
console.log(meuArray) // Imprime o array atualizado

meuArray.unshift("vermelho") // Adiciona "vermelho" ao início do array
console.log(meuArray.length) // Imprime o novo tamanho do array
console.log(meuArray) // Imprime o array atualizado

const nomes = ["César", "Danilo", "Jennifer", "Jonatas", "Nicole", "Jenifer", "Thiago", "Filipe"] // Declara um array de nomes
console.log(nomes) // Imprime o array de nomes

// elimina o ultimo elemento
// nomes.pop()
// console.log(nomes) // Código comentado que remove o último elemento do array e imprime o array

// elimina o primeiro elemento
// nomes.shift()
// console.log(nomes) // Código comentado que remove o primeiro elemento do array e imprime o array

// inserir um elemento no array
// nomes.splice(2, 4)
// console.log(nomes) // Código comentado que remove elementos do array a partir do índice 2 e imprime o array

console.log(nomes.join("_")) // Imprime os nomes unidos por "_"
console.log(nomes.join(" ")) // Imprime os nomes unidos por espaço
console.log(nomes.join("-")) // Imprime os nomes unidos por "-"
console.log(nomes.join("|")) // Imprime os nomes unidos por "|"
console.log(nomes.join("/")) // Imprime os nomes unidos por "/"
console.log(nomes.join("*")) // Imprime os nomes unidos por "*"

const caes = ["Buldogue", "Poodle", "Pastor Alemão", "Dálmata"] // Declara um array de raças de cães
const gatos = ["Siamês", "Persa", "Sphynx", "Ragdoll"] // Declara um array de raças de gatos
const animais = caes.concat(gatos) // Concatena os arrays de cães e gatos
console.log(animais) // Imprime o array concatenado

const nome = ["Rita", "Pedro", "Miguel", "Ana", "Vanessa"] // Declara um array de nomes
console.log(nome) // Imprime o array de nomes
const masculinos = nome.slice(1, 3) // Cria um novo array com elementos do índice 1 ao 2
console.log(masculinos) // Imprime o novo array
console.log(nome.includes('Pedro')) // Verifica se "Pedro" está no array e imprime o resultado
console.log(nome.includes('Rita')) // Verifica se "Rita" está no array e imprime o resultado
console.log(nome.includes('Julieta')) // Verifica se "Julieta" está no array e imprime o resultado
console.log(nome.indexOf('Pedro')) // Imprime o índice de "Pedro" no array
console.log(nome.indexOf('Rita')) // Imprime o índice de "Rita" no array
console.log(nome.indexOf('Julieta')) // Imprime o índice de "Julieta" no array (deve ser -1, pois não está no array)

nome.reverse() // Inverte a ordem dos elementos no array
console.log(nome) // Imprime o array invertido

const objetos = {id:1 , produto:"Arroz"} // Declara um objeto
const array = [objetos, {id:2, produto:"Macarrão"}] // Declara um array de objetos
array.push({id:3, produto:"Pão"}) // Adiciona um novo objeto ao array
console.log(array) // Imprime o array de objetos

const produtos = [
    { id: 1, nome: 'Arroz' },
    { id: 2, nome: 'Macarrão' },
    { id: 3, nome: 'Pão' }
] // Declara um array de objetos com produtos

for (const produto of produtos) {
    console.log(produto.id, produto.nome) // Itera sobre o array de produtos e imprime o id e nome de cada produto
}