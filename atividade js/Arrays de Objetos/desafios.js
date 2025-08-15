// 14.Crie um array com 3 objetos, cada um representando um produto com nome e preco.
// o Exiba no console o nome do último produto do array.
// o Altere o preço do primeiro produto.

const produtos = [
    {
        Nome: "Celular",
        Preço: 1000
    },
    {
        Nome: "PC",
        Preço: 4000
    },
    {
        Nome: "Fone",
        Preço: 15
    },
]

console.log(produtos[2].Nome);

produtos[0].Preço = 2000;
console.log(produtos)

// 15.Crie um array com 2 objetos, cada um com nome e idade. o Exiba no console apenas a idade do segundo objeto o Adicione um terceiro objeto ao array.
const pessoas = [
    {
        Nome: "Célia",
        Idade: 46
    },
    {
        Nome: "Mário",
        Idade: 50
    }
]

console.log(pessoas[1].Idade);
pessoas.push({
    Nome: "João",
    Idade: 30
});
console.log(pessoas);