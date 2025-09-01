// 12. Em um jogo online:
// • Se o jogador tiver mais de 1000 pontos, mostre “Nível Ouro”
// • Entre 500 e 1000 → “Nível Prata”
// • Menos de 500 → “Nível Bronze”

let pontos = 520;
let  nivel = (pontos > 1000) ? "nivel ouro" : (pontos >= 500) ? "nivel prata" : "nivel bronze";

console.log(`seu nivel é: ${nivel}`)