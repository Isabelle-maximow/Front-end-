// 16.Crie uma variável com a data atual e exiba no console.
const dataAtual = new Date();
console.log(dataAtual);

// 17.Use .getDay() para mostrar no console o número que representa o dia da semana de hoje.
const diaDaSemana = dataAtual.getDay();
console.log(diaDaSemana); 

// 18.Use .setDate() para alterar o dia da data para 10 e exiba o novo valor.
dataAtual.setDate(10);
console.log(dataAtual);

//19.Crie uma variável que armazene o ano atual usando new Date().
const anoAtual = new Date().getFullYear();
console.log(anoAtual);
