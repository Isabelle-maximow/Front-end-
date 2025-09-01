// 22. Crie um programa que leia um número de 1 a 12 e mostre o mês
// correspondente.
let mes = 5;
let nome_mes = (mes === 1) ? "janeiro" : (mes === 2) ? "fevereiro" : (mes === 3) ? "março" : (mes === 4) ? "abril" : (mes === 5) ? "maio" : (mes === 6) ? "junho" 
: (mes === 7) ? "julho" : (mes === 8) ? "agosto" : (mes === 9) ? "setembro" 
: (mes === 10) ? "outubro" : (mes === 11) ? "novembro" : (mes === 12) ? "dezembro" : "Inválido";

console.log(nome_mes);