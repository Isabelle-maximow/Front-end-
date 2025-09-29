// .toFixed() -> arredondar cada decimal
// Math.ceil; -> arredonda para cima
// Math.floor; -> arredonda para baixo

let valor = 1243.5658;
console.log(valor.toFixed(2));
console.log(valor.toFixed(4));

valor = 7.2;
console.log(Math.ceil(valor)); // 8
console.log(Math.floor(valor)); // 7

// valor negativo:
valor = -7.2;
console.log(Math.ceil(valor)); // -7
console.log(Math.floor(valor)); // -8

// Math.around(); -> arredonda para o inteiro mais proximo 
valor = 4.4;
console.log(Math.round(valor));