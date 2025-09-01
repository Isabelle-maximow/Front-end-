// 9. Um motorista tem 50 litros de gasolina no tanque. Se ele andar 200 km e o carro
// fizer 10 km/l, diga quantos litros restam.

let gasolina = 50;
let distancia = 200;
let consumo_carro = 10;

let litros_usados = distancia / consumo_carro;
let litros_restantes = gasolina - litros_usados;

console.log(`litros restantes: ${litros_restantes}`);