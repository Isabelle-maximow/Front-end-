// 17. Crie um programa que peça uma cor em inglês (“red”, “blue”, “green”) e mostre
// sua tradução em português.

let color = "pink";
let pt_br = (color === "red") ? "vermelho" : (color === "pink") ? "rosa" : (color === "green") ? "verde" : "cor desconhecida";

console.log(`a cor ${color} em pt-br é: ${pt_br}`);