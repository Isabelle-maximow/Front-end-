// const dataNasc = new Date(2000, 6, 18, 15, 45, 33);
const dataNasc = new Date("jul 18 2000 15:45:33"); // formato string

console.log(dataNasc.toISOString()); // formato da dada no estilo iso 
console.log("Dia", dataNasc.getDate()); // pegar a data do dia
console.log("Mes", dataNasc.getMonth()+1); // pegar o mes 
console.log("Ano", dataNasc.getFullYear()); // pegar o ano

// calcular a idade:
const today = new Date(); // data de hj
console.log("Idade: ", today.getFullYear() -dataNasc.getFullYear());

let data = new Date();
console.log("dia da semana: ", data.getDate())
console.log("dia da mes: ", data.getDate(15))

