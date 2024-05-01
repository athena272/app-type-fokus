// Possivelmente Palíndromas
// Observe as seguintes strings abaixo:

// "arara"
// "osso"
// "socorram-me, subi no onibus em marrocos"

// Agora leia essas strings de trás para frente. Você pode ler elas independentemente do sentido da leitura!

// Palavras e frases assim são chamadas de palíndromas.

// Agora observe as seguintes strings:
// "parar"
// "temem"
// "technation"

// "parar" e "temem" são chamadas de palavras potencialmente palíndromas
// Isso ocorre porque você pode rearranjar/permutar as letras dessas palavras de forma que elas se tornem palíndromas

// "parar" -> "rapar"
// "temem" -> "metem"

// Enquanto isso, "technation" nunca será uma palavra palíndroma, independentemente de como você reorganizar as letras dela (se duvida de mim, pode tentar!)

// Observações adicionais:
// 1) Não é necessário que as strings sejam palavras que existem na vida real
// 2) Considere a string vazia como potencialmente palíndroma


// Descrição do formato da função solução
// 1) Recebe como parâmetro uma string
// 2) Retorne True, caso a palavra seja potencialmente palíndroma. Retorne False, caso contrário


// Exemplos
// Exemplo 1:
// Entrada: palavra = "abbac"
// Saída: True

// Exemplo 2:
// Entrada: palavra = "abba"
// Saída: True

// Exemplo 3:
// Entrada: palavra = "abbacd"
// Saída: False

function main(palavra) {
    // Função para contar a ocorrência de cada caractere na palavra
    function countCharacters(str) {
        const counts = {};
        for (const char of str) {
            counts[char] = (counts[char] || 0) + 1;
        }
        return counts;
    }

    // Função para verificar se a palavra é potencialmente palíndroma
    function isPotentialPalindrome(str) {
        const charCounts = countCharacters(str);
        let oddCount = 0;

        for (const count of Object.values(charCounts)) {
            if (count % 2 !== 0) {
                oddCount++;
                if (oddCount > 1) {
                    return false;
                }
            }
        }

        return true;
    }

    return isPotentialPalindrome(palavra);
}

// Teste
console.log(main("abbac")); // Saída: true
console.log(main("abba")); // Saída: true
console.log(main("abbacd")); // Saída: false
