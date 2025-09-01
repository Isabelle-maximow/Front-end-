// 5. Uma loja vende camisas por R$ 50 cada.
// • Se o cliente comprar duas ou mais, ganha 10% de desconto no valor total.
// • Mostre o valor final.

let quantidade = 3;
let preco_unit = 50;

//  valor total com desconto
let valor_total = quantidade * preco_unit * (quantidade >= 2 ? 0.9 : 1); 

console.log(`valor final: ${valor_total}`);