// Palavra composta
// Dado um número n, para cada inteiro de 1 a n inclusive, coloque o valor em uma string usando a vírgula (,) como separador respeitando a regra a seguir:
// * Se i for um múltiplo de 3 e 5, coloque DesenvolvimentoSoftware.
// * Se i for um múltiplo de 3 (mas não de 5), coloque Desenvolvimento.
// * Se i for um múltiplo de 5 (mas não 3), coloque Software.
// * Se i não for múltiplo de 3 ou 5, coloque o número i.


// Descrição do formato da função solução
// 1) Recebe como parâmetro um número inteiro
// 2) Retorne uma string com os valores em sequência usando o separador \", \" (vírgula com um espaço entre eles)


// Exemplos
// Exemplo 1:
// Entrada: n = 1
// Saída: "1"

// Exemplo 2:
// Entrada: n = 5
// Saída: "1, 2, Desenvolvimento, 4, Software"

// Exemplo 3:
// Entrada: n = 15
// Saída: "1, 2, Desenvolvimento, 4, Software, Desenvolvimento, 7, 8, Desenvolvimento, Software, 11, Desenvolvimento, 13, 14, DesenvolvimentoSoftware"

function main(n){
    let resultado = '';
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            resultado += 'DesenvolvimentoSoftware';
        } else if (i % 3 === 0) {
            resultado += 'Desenvolvimento';
        } else if (i % 5 === 0) {
            resultado += 'Software';
        } else {
            resultado += i;
        }

        if (i < n) {
            resultado += ', ';
        }
    }
    return resultado;
}

// Testes
console.log(main(1));   // Saída: "1"
console.log(main(5));   // Saída: "1, 2, Desenvolvimento, 4, Software"
console.log(main(15));  // Saída: "1, 2, Desenvolvimento, 4, Software, Desenvolvimento, 7, 8, Desenvolvimento, Software, 11, Desenvolvimento, 13, 14, DesenvolvimentoSoftware"
