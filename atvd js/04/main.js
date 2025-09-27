// 4. Percorrendo um Array
// Dado o array:
// let nomes = ["Ana", "Pedro", "João", "Maria"];
// Dentro de uma função, exiba todos os nomes.

let nomes = ["Ana", "Pedro", "João", "Maria"];

function exibirNomes(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
console.log("nomes no array:");
exibirNomes(nomes);
