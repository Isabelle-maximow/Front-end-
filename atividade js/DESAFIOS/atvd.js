// 20.Crie um array com 5 nomes de alunos. Mostre no console o tamanho do
// array e depois altere o último nome para "Aluno Novo".
const alunos = ["João", "Maria", "Pedro", "Ana", "Lucas"];
console.log("Tamanho do array:", alunos.length);

alunos[alunos.length - 1] = "Aluno Novo";
console.log("Array após alteração:", alunos);

// 21.Crie um objeto representando um livro com titulo, autor e ano. Adicione a
// propriedade editora e depois remova a propriedade ano.
const livro = {
  titulo: "O Alquimista",
  autor: "Paulo Coelho",
  ano: 1988,
};
livro.editora = "HarperCollins";

// 22.Crie um array com 3 objetos representando carros (marca, modelo).
// o Altere o modelo do segundo carro.
// o Exiba apenas a marca do primeiro carro.
// 23.Crie um array com 4 elementos e altere o primeiro e o último elemento para
// "Alterado".
// 24.Crie um objeto com seu nome e uma data (new Date()). Use .getDay() para
// exibir o dia da semana que está na data do objeto.
// 25.Crie um array com pelo menos 3 valores diferentes e exiba apenas o
// elemento que está no meio do array (sem usar .pop() ou .push()).
