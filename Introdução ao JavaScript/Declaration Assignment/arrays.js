const pessoa1 = "Isabelle"
const pessoa2 = "isa"
const pessoa3 = "bella"
const pessoa4 = "bellinha"
const pessoa5 = "bebela"
// ....
const pessoa99 = "mimi"

// forma incorreta - perde mt tempo.
// forma correta: usar arrays - que são listas

// Variavel + indice ( q smp inicia do 0)
const pessoas = ["isabelle", "isa", "bella", "bellinha", "bebela", "mimi"]
console.log(pessoas);

console.log(pessoas[2]); // chaamndo a posição  - bella
console.log(pessoas.length) // ver quantidade de elementos

// atualizar a lista - mudar:
pessoas[1] = "bel"
// acrescentando uma pessoa a lista - add a posição e nome:
pessoas[6] = "maria"
// remover da lista - usando o splice:
pessoas.splice(1, 1); // indice inicial e quantidade a ser removida
pessoas.pop(); // pop () remove o ultimo elemento 
pessoas.shift(); // deletar o primeiro elemento
pessoas.unshift("bebela") // add no incio

// acrescneter indo para o final - sem posição:
pessoas.push("PIPI")
yg7

// CRIAR LSITAS MAIS COMPLEXAS:
const persons = [
    {name: "isabelle", age: 19},
    {name: "Natan", age: 25},
    {name:"Emilly", age: 12}
]; // matriz - dentro de uma lista varios objetos

console.log(person[0]) // puxando so o elemnto na posição
console.log(person[0].age) // puxando a idade do elemnto na posição
