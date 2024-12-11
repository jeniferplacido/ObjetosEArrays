
// array vazia
const array1 = []
// array de números
const array2 = [1, 2, 3, 4, 5]
// array de strings
const array3 = ["a", "b", "c", "d"]
// array de booleanos
const array4 = [true, false, true, false]
// array de tipos diferentes
const array5 = ["a", 1, true]
// imprimindo os arrays no console
console.log(array1, array2, array3, array4, array5)
console.log( array2[0], array3[1], array4[2], array5[1])

// for ( let index = 0; index < array2.length; index++){
//     console.log(array2[index])
// }

const meuArray = ["rosa", "verde", "amarelo", "azul", "branco"]

console.log("Tamanho do meu array: " + meuArray.length)

for ( let i = 0; i < meuArray.length; i++){
    console.log(meuArray[i])
}

meuArray.push("preto")
console.log(meuArray.length)
console.log(meuArray)

meuArray.unshift("vermelho")
console.log(meuArray.length)
console.log(meuArray)

const nomes = ["César", "Danilo", "Jennifer", "Jonatas", "Nicole", "Jenifer", "Thiago", "Filipe"]
console.log(nomes)
// elimina o ultimo elemento
// nomes.pop()
// console.log(nomes)
// // elimina o primeiro elemento
// nomes.shift()
// console.log(nomes)

// inserir um elemento no array
// nomes.splice(2, 4)
// console.log(nomes)

console.log(nomes.join("_"))
console.log(nomes.join(" "))
console.log(nomes.join("-"))
console.log(nomes.join("|"))
console.log(nomes.join("/"))
console.log(nomes.join("*"))

const caes = ["Buldogue", "Poodle", "Pastor Alemão", "Dálmata"]
const gatos = ["Siamês", "Persa", "Sphynx", "Ragdoll"]
const animais = caes.concat(gatos)
console.log(animais)

const nome = ["Rita", "Pedro", "Miguel", "Ana", "Vanessa"]
console.log(nome)
const masculinos = nome.slice(1, 3)
console.log(masculinos)
console.log(nome.includes('Pedro'))
console.log(nome.includes('Rita'))  
console.log(nome.includes('Julieta'))
console.log(nome.indexOf('Pedro'))
console.log(nome.indexOf('Rita'))  
console.log(nome.indexOf('Julieta'))

nome.reverse()
console.log(nome)

const objetos = {id:1 , produto:"Arroz"}
const array = [objetos, {id:2, produto:"Macarrão"}]
array.push({id:3, produto:"Pão"})
console.log(array)

const produtos = [
    { id: 1, nome: 'Arroz' },
    { id: 2, nome: 'Macarrão' },
    { id: 3, nome: 'Pão' }
  ]

  for (const produto of produtos) {
    console.log(produto.id, produto.nome)
  }