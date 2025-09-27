// 5. Percorrendo um Objeto
// Dado o objeto:
// let aluno = { nome: "Lucas", idade: 20, curso: "TI" };
// Dentro de uma função, mostre todas as chaves e valores.
let aluno = { nome: "Lucas", idade: 20, curso: "TI" };

function exibirChavesValores(obj) {
    for (let chave in obj) {
        console.log(`${chave}: ${obj[chave]}`);
    }
}
console.log("chaves e valores do objeto:");
exibirChavesValores(aluno);