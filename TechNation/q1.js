// Parênteses Balanceados
// Uma string que consiste em parênteses esquerdo e direito, "(" e ")", é dada e pede-se que você equilibre os parênteses inserindo parênteses conforme necessário. Determine o número mínimo de caracteres que devem ser inseridos.


// Descrição do formato da função solução
// 1) Recebe como parâmetro uma string com parênteses.
// 2) Retorne um número inteiro que deve ser o número mínimo de caracteres a serem adicionados na string.


// Exemplos
// Exemplo 1:
// Entrada: palavra="()))"
// Saída: 2

// Exemplo 2:
// Entrada: palavra="()()"
// Saída: 0

// Exemplo 3:
// Entrada: palavra="())("
// Saída: 2

function main(palavra) {
    let parAbertos = 0; // Contador de parênteses abertos
    let caracteresFaltantes = 0; // Contador de caracteres faltantes para equilibrar os parênteses

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === '(') {
            parAbertos++; 
        } else if (palavra[i] === ')') {
            if (parAbertos === 0) {
                caracteresFaltantes++; 
            } else {
                parAbertos--; 
            }
        }
    }

    return parAbertos + caracteresFaltantes;
}

// Testando os exemplos fornecidos
console.log(main("()))")); // Saída: 2
console.log(main("()()")); // Saída: 0
console.log(main("())(")); // Saída: 2
