// 10. Uma pizzaria cobra R$ 40 a pizza.
// • Se o cliente escolher borda recheada, acrescente R$ 8.
// • Se pedir refrigerante, acrescente R$ 10.
// • Mostre o valor final do pedido.

let preco_pizza = 40;
let borda_recheada = true;
let refrigerante = true;
let pedido = preco_pizza + (borda_recheada ? 8 : 0) + (refrigerante ? 10 : 0);

console.log(`valor final do pedido: R$ ${pedido}`);