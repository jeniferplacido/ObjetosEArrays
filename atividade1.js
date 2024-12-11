const readline = require('readline'); // Importa o módulo readline para ler dados do console

// Cria uma interface para ler dados do console
const readlineSync = readline.createInterface({
    input: process.stdin, // Define a entrada padrão como o console
    output: process.stdout // Define a saída padrão como o console
});

// Cria um array vazio para armazenar as cores
let cores = [];

// Função para pedir ao usuário para preencher o array com 5 cores diferentes
function pedirCores(i) {
    if (i < 5) { // Verifica se o índice é menor que 5
        readlineSync.question(`Digite a cor ${i + 1}: `, (cor) => { // Pede ao usuário para digitar uma cor
            cores.push(cor); // Adiciona a cor ao array
            pedirCores(i + 1); // Chama a função novamente com o próximo índice
        });
    } else { // Se o índice for 5 ou maior
        // Exibe o array completo e seu tamanho
        console.log("Array de cores:", cores); // Imprime o array de cores
        console.log("Tamanho do array:", cores.length); // Imprime o tamanho do array

        // Pede ao usuário para eliminar uma cor do array
        readlineSync.question("Digite uma cor para eliminar: ", (corParaEliminar) => { // Pede ao usuário para digitar uma cor para eliminar
            let index = cores.indexOf(corParaEliminar); // Encontra o índice da cor no array
            if (index !== -1) { // Se a cor estiver no array
                cores.splice(index, 1); // Remove a cor do array
            }

            // Exibe a frase para cada cor presente no array
            for (let i = 0; i < cores.length; i++) { // Itera sobre cada cor no array
                console.log(`Na posição ${i} temos a cor ${cores[i]}`); // Imprime a posição e a cor
            }

            // Pede ao usuário para inserir uma nova cor
            readlineSync.question("Digite uma nova cor para adicionar: ", (novaCor) => { // Pede ao usuário para digitar uma nova cor
                if (!cores.includes(novaCor)) { // Se a cor não estiver no array
                    cores.unshift(novaCor); // Adiciona a nova cor na primeira posição do array
                }

                // Exibe o array atualizado
                console.log("Array de cores atualizado:", cores); // Imprime o array de cores atualizado

                // Fecha a interface de leitura
                readlineSync.close(); // Fecha a interface readline
            });
        });
    }
}

// Inicia o processo pedindo a primeira cor
pedirCores(0); // Chama a função pedirCores com o índice inicial 0