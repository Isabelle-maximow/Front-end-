// 20. Um mercado faz promoções:
// • Se gastar acima de R$ 100 → ganha 10% de desconto
// • Se pagar em dinheiro → mais 5% de desconto
// • Mostre o valor final da compra

let valor_compra = 200;
let forma_pagamento = "dinheiro";

let desconto = (valor_compra > 100 ? 0.10 : 0) + (forma_pagamento === "dinheiro" ? 0.05 : 0);
let valor_final = valor_compra * (1 - desconto);

console.log(`Valor final: R$ ${valor_final}`);
