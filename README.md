# Unidade 4 - Objetos e Arrays - CODERHOUSE

# **Objetos em JavaScript**

## **Introdução**



- O que são objetos e por que eles são tão importantes.
- Como criar, acessar e manipular objetos.
- Conceitos mais avançados como `this`, funções construtoras e métodos.

E o melhor: vamos aprender de forma simples e divertida, com exemplos que você pode usar na vida real! Vamos lá? 🚀

---

## **O que é um Objeto?**

Em JavaScript, um **objeto** é uma estrutura que agrupa informações relacionadas (propriedades) e comportamentos (métodos) em um único lugar.

### Analogia:

Imagine um objeto como o perfil de um personagem em um jogo:

- **Propriedades:** São características como "nome", "força" ou "vida".
- **Métodos:** São ações como "correr" ou "atacar".

### Para que serve?

- Organizar dados de forma lógica e estruturada.
- Representar entidades do mundo real, como carros, frutas ou pessoas.
- Associar comportamentos (métodos) aos dados para realizar ações específicas.

Objetos são usados para representar e manipular dados de forma mais eficiente, agrupando informações e comportamentos relacionados.

---

## **Criando Objetos**

Para criar um objeto em JavaScript, usamos **chaves (`{}`)** e definimos pares `propriedade: valor` dentro delas.

### Exemplo Real: Cadastro de um Produto

```javascript
const produto = {
    nome: "Notebook",
    preco: 2500,
    estoque: 50
};
console.log(produto);
```

**O que isso significa?**

- Criamos um objeto chamado `produto` com três propriedades:
  - `nome`: Identifica o produto.
  - `preco`: Mostra o preço do produto.
  - `estoque`: Indica a quantidade disponível.

Objetos permitem agrupar dados relacionados em uma única estrutura.

### Exemplo Divertido: Um Dragão

```javascript
const dragao = {
    nome: "Smaug",
    cor: "Dourado",
    idade: 300,
    rugir: function() {
        console.log(`${this.nome} está rugindo!`);
    }
};

console.log(dragao);
dragao.rugir();
```

**Resultado no Console:**

```
{
    nome: "Smaug",
    cor: "Dourado",
    idade: 300
}
Smaug está rugindo!
```

Objetos também podem conter métodos (funções associadas) que executam ações baseadas em seus dados.

---

## **Acessando Propriedades**

### **1. Notação Ponto (`.`)**

A forma mais comum e intuitiva de acessar as propriedades:

```javascript
console.log(produto.nome); // Resultado: "Notebook"
console.log(produto.preco); // Resultado: 2500
```

### **2. Notação Colchetes (`[]`)**

Usamos colchetes para propriedades dinâmicas ou com espaços no nome:

```javascript
const propriedade = "nome";
console.log(produto[propriedade]); // Resultado: "Notebook"

const cliente = { "nome completo": "Maria Silva" };
console.log(cliente["nome completo"]); // Resultado: "Maria Silva"
```

**Quando usar?**

- Use **notação ponto** para propriedades comuns.
- Use **colchetes** para propriedades dinâmicas ou incomuns.

Você pode acessar os dados de um objeto usando ponto ou colchetes, dependendo do contexto.

---

## **Alterando Propriedades**

Você pode atualizar ou adicionar propriedades a qualquer momento.

### Exemplo: Atualizando um Produto

```javascript
produto.preco = 2400; // Atualiza o preço
produto.categoria = "Informática"; // Adiciona uma nova propriedade

console.log(produto);
```

**Resultado:**

```
{
    nome: "Notebook",
    preco: 2400,
    estoque: 50,
    categoria: "Informática"
}
```

 Objetos são dinâmicos e podem ser atualizados ou expandidos conforme necessário.

---

## **Funções Construtoras e `new`**

### O que é uma Função Construtora?

É uma função usada para criar múltiplos objetos semelhantes com valores diferentes.

### O que é `new`?

A palavra-chave `new` cria uma nova instância de um objeto baseado em uma função construtora.

### Exemplo Prático: Cadastro de Frutas

```javascript
function Fruta(nome, cor, peso) {
    this.nome = nome;
    this.cor = cor;
    this.peso = peso;
    this.tipo = "Fruta"; // Valor fixo
}

const banana = new Fruta("Banana", "Amarela", 120);
const maca = new Fruta("Maçã", "Vermelha", 150);

console.log(banana);
console.log(maca);
```

**Explicação:**

1. **`function Fruta`**: Define a "fábrica" que cria frutas.
2. **`this.nome = nome`**: Define as propriedades para cada objeto criado.
3. **`new Fruta(...)`**: Gera um objeto com os valores fornecidos.

Funções construtoras permitem criar objetos padronizados com valores personalizados.

---

## **O que é o `this`?**

O `this` é como um "dedo" que aponta para o objeto atual dentro de um método ou função construtora.

### Exemplo: Usando `this` em um Carro

```javascript
function Carro(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.descricao = function() {
        return `Carro: ${this.marca} ${this.modelo}`;
    };
}

const fusca = new Carro("Volkswagen", "Fusca");
console.log(fusca.descricao());
```

**Resultado:**

```
Carro: Volkswagen Fusca
```

`this` é usado para referenciar as propriedades e métodos de um objeto atual.

---

## **Métodos em Objetos**

### Diferença entre Função e Método

- **Função:** Código independente.
- **Método:** Função que pertence a um objeto.

### Exemplo Prático: Calculadora

```javascript
const calculadora = {
    somar: function(a, b) {
        return a + b;
    },
    subtrair: function(a, b) {
        return a - b;
    }
};

console.log(calculadora.somar(10, 5)); // Resultado: 15
console.log(calculadora.subtrair(10, 5)); // Resultado: 5
```

Métodos são funções associadas a objetos que realizam ações baseadas nos dados do objeto.

---

## **Iterando em Objetos**

### **Operador `in`**

Verifica se uma propriedade existe em um objeto:

```javascript
console.log("nome" in produto); // true
console.log("cor" in produto); // false
```

### **Operador `for...in`**

Percorre todas as propriedades de um objeto:

```javascript
for (let prop in produto) {
    console.log(`${prop}: ${produto[prop]}`);
}
```

**Resultado:**

```
nome: Notebook
preco: 2400
estoque: 50
categoria: Informática
```

 `in` verifica a existência de propriedades, enquanto `for...in` itera sobre todas as propriedades de um objeto.

---

## **Resumo**

1. Objetos organizam dados em pares de **propriedade** e **valor**.
2. Use **funções construtoras** e `new` para criar múltiplos objetos semelhantes.
3. O **`this`** referencia o objeto atual.
4. Use `in` para verificar propriedades e `for...in` para iterar sobre elas.
5. Métodos são funções dentro de objetos que adicionam comportamentos.

---

#  Arrays em JavaScript

## **Introdução**

- O que são arrays e como utilizá-los.
- Métodos úteis para manipular arrays.
- Combinações poderosas de arrays e objetos.

---

## **O que é um Array?**

Um **array** é uma lista ordenada que armazena múltiplos valores em uma única variável.

### Analogia:

Imagine uma prateleira com várias caixas. Cada caixa tem um número (o índice) e contém um objeto específico.

- **Prateleira:** O array.
- **Número da caixa:** O índice.
- **Objeto dentro da caixa:** O valor.

### Para que serve?

- Organizar listas de itens como nomes, números, ou objetos.
- Facilitar a manipulação e acesso de grandes conjuntos de dados.

Arrays permitem organizar e acessar listas de informações de forma eficiente.

---

## **Criando um Array**

### Sintaxe Básica

Usamos colchetes `[]` para criar arrays. Os valores são separados por vírgulas.

```javascript
const exemploArray = [valor1, valor2, valor3];
```

### Exemplo Real

```javascript
const frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas); // Exibe: ["Maçã", "Banana", "Laranja"]
```

### Exemplo Divertido

```javascript
const animais = ["Cachorro", "Gato", "Elefante"];
console.log(animais); // Exibe: ["Cachorro", "Gato", "Elefante"]
```

---

## **Acessando Elementos**

Os índices começam em `0`. O primeiro elemento está na posição `0`, o segundo em `1`, e assim por diante.

```javascript
console.log(frutas[0]); // Exibe: "Maçã"
console.log(frutas[2]); // Exibe: "Laranja"
```

---

## **Percorrendo Arrays**

### **Usando `for`**

```javascript
for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta ${i + 1}: ${frutas[i]}`);
}
```

### **Usando `for...of`**

```javascript
for (const fruta of frutas) {
    console.log(`Fruta: ${fruta}`);
}
```

---

## **Métodos Comuns de Arrays**

### **1. `length`**

Retorna o número total de elementos no array.

```javascript
console.log(frutas.length); // Exibe: 3
```

### **2. `push`**

Adiciona um ou mais elementos ao final do array.

```javascript
frutas.push("Uva");
console.log(frutas); // Exibe: ["Maçã", "Banana", "Laranja", "Uva"]
```

### **3. `pop`**

Remove o último elemento do array.

```javascript
frutas.pop();
console.log(frutas); // Exibe: ["Maçã", "Banana", "Laranja"]
```

### **4. `splice`**

Remove, substitui ou insere elementos em uma posição específica.

```javascript
frutas.splice(1, 1); // Remove "Banana"
console.log(frutas); // Exibe: ["Maçã", "Laranja"]

frutas.splice(1, 0, "Morango"); // Insere "Morango"
console.log(frutas); // Exibe: ["Maçã", "Morango", "Laranja"]
```

### **5. `join`**

Combina todos os elementos em uma única string, separados por um delimitador.

```javascript
const lista = frutas.join(", ");
console.log(lista); // Exibe: "Maçã, Morango, Laranja"
```

### **6. `concat`**

Combina dois ou mais arrays em um novo array.

```javascript
const doces = ["Bala", "Chocolate"];
const tudo = frutas.concat(doces);
console.log(tudo); // Exibe: ["Maçã", "Morango", "Laranja", "Bala", "Chocolate"]
```

### **7. `slice`**

Retorna uma parte do array, sem alterar o original.

```javascript
const primeiras = frutas.slice(0, 2);
console.log(primeiras); // Exibe: ["Maçã", "Morango"]
```

### **8. `includes`**

Verifica se o array contém um determinado elemento.

```javascript
console.log(frutas.includes("Maçã")); // Exibe: true
console.log(frutas.includes("Uva")); // Exibe: false
```

### **9. `indexOf`**

Retorna o índice do elemento especificado, ou `-1` se não encontrado.

```javascript
console.log(frutas.indexOf("Morango")); // Exibe: 1
console.log(frutas.indexOf("Uva")); // Exibe: -1
```

### **10. `reverse`**

Inverte a ordem dos elementos do array.

```javascript
frutas.reverse();
console.log(frutas); // Exibe: ["Laranja", "Morango", "Maçã"]
```

---

## **Arrays de Objetos**

Um array pode armazenar objetos, permitindo organizar dados mais complexos.

### Exemplo:

```javascript
const produtos = [
    { nome: "Notebook", preco: 2500 },
    { nome: "Celular", preco: 1500 }
];

console.log(produtos[0].nome); // Exibe: "Notebook"
console.log(produtos[1].preco); // Exibe: 1500
```

---

## **Iterando Arrays de Objetos**

```javascript
for (const produto of produtos) {
    console.log(`${produto.nome} custa R$${produto.preco}`);
}
```

**Resultado:**

```
Notebook custa R$2500
Celular custa R$1500
```

---

## **Resumo**

1. Arrays armazenam listas de valores.
2. Métodos como `push`, `splice` e `concat` ajudam a manipular dados.
3. Arrays podem conter objetos, tornando-os ideais para armazenar dados complexos.
4. Use loops como `for` e `for...of` para percorrer arrays de forma eficiente.

### 

Feito com ❤ pela **Professora Jenifer Plácido** | Coderhouse | Unidade 4: Objetos e Arrays