// Problema da soma de dois números
// Um vetor com números chamado numeros é dado e pede-se que você encontre os dois elementos desse vetor que somados são iguais ao número objetivo.

// Considere que existe somente uma solução possível e que você não poderá usar o mesmo elemento mais de uma vez.

// Retorne os valores em ordem crescente de indice no vetor.

// Obs.: Números repetidos são considerados elementos diferentes.


// Descrição do formato da função solução
// 1) Recebe como parâmetro um vetor numeros e um número inteiro objetivo
// 2) Retorne um vetor com duas posições cujos valores são os indices do vetor em ordem crescente que fazem a soma objetivo ser possível.


// Exemplos
// Examplo 1:
// Entrada: numeros = [2,7,11,15], objetivo = 9
// Saída: [0,1]

// Examplo 2:
// Entrada: numeros = [3,2,4], objetivo = 6
// Saída: [1,2]

// Examplo 3:
// Entrada: numeros = [3,3], objetivo = 6
// Saída: [0,1]

// function main(numeros, objetivo) {
//     const nums = [...numeros];
//     // Ordenar o array
//     nums.sort((a, b) => a - b);

//     let esquerda = 0;
//     let direita = nums.length - 1;

//     while (esquerda < direita) {
//         const soma = nums[esquerda] + nums[direita];
//         if (soma === objetivo) {
//             // Quando eu encontrar os dois números, retorno eles, até lá, devo mover os ponteiros
//             const indiceEsquerda = numeros.indexOf(nums[esquerda]);
//             let indiceDireita = numeros.indexOf(nums[direita], nums[esquerda] === 0 ? indiceEsquerda + 1 : 0);
//             if (indiceDireita === -1) {
//                 // Se o segundo número não for encontrado após o primeiro,
//                 // apenas retorne os índices atuais
//                 indiceDireita = direita;
//             }
//             return [
//                 indiceEsquerda,
//                 indiceDireita
//             ];
//         } else if (soma < objetivo) {
//             // A soma é menor que o objetivo, deve-se o ponteiro esquerdo para a direita
//             esquerda++;
//         } else {
//             // A soma é maior que o objetivo, deve-se mover o ponteiro direito para a esquerda
//             direita--;
//         }
//     }

//     return [];
// }
function main(numeros, objetivo) {
    const map = {};

    for (let i = 0; i < numeros.length; i++) {
        const complemento = objetivo - numeros[i];
        if (map[complemento] !== undefined) {
            return [map[complemento], i];
        }
        map[numeros[i]] = i;
    }

    return [];
}

// Exemplo de uso:
console.log(main([2, 7, 11, 15], 9)); // Saída: [0,1]
console.log(main([3, 2, 4], 6));      // Saída: [1,2]
console.log(main([3, 3], 6));         // Saída: [0,1]
console.log(main([0, -4, 3, 1], -4)); // Saída: [0,1]

