// 9. Maior Número do Array
// Crie uma função que receba um array de números e retorne o maior valor.
// Use um loop for...of.
function maiorNumero(arr) {
    let maior = arr[0];
    for (let num of arr) {
        if (num > maior) {
            maior = num;
        }
    }
    return maior;
}
console.log("maior número no array [3, 5, 2, 8, 1]:", maiorNumero([3, 5, 2, 8, 1])); // 8
