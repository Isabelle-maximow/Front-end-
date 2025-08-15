// 11.Crie um objeto que represente um aluno com nome, idade e turma.
// o Exiba apenas o valor da propriedade turma.
// o Altere o valor da idade.
// o Adicione a propriedade curso ao objeto.
const aluno = {
    nome: "João",
    idade: 17,
    turma: "3A",
};
console.log(aluno.turma);
aluno.idade = 18;
aluno.curso = "Python";

console.log(aluno);

// 12. Crie um objeto que represente um celular com marca, modelo e cor.
// o Altere a cor para "Preto".
// o Remova a propriedade modelo do objeto.
const celular = {
    marca: "Samsung",
    modelo: "Galaxy A35",
    cor: "Roxo",
}
celular.cor = "preto";
delete celular.modelo;
console.log(celular);

// 13.Crie um objeto pessoa com nome e cidade.
// o Adicione a propriedade profissao.
// o Exiba o objeto inteiro no console.
const pessoinha = {
    nome: "isa",
    cidade: "SP"
};
pessoinha.profissao = "dev";
console.log(pessoinha);


