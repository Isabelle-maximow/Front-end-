// 8. Peça três notas de um aluno, calcule a média e mostre a situação:
// • ≥ 7 → Aprovado
// • Entre 5 e 6.9 → Recuperação
// • < 5 → Reprovado

let nota1 = 8;
let nota2 = 4;
let nota3 = 6;

let media = (nota1 + nota2 + nota3) / 3;

let situação = media >= 7 ? "aprovado" : media >= 5 ? "recuperação" : "reprovado";

console.log(`media: ${media} e situação: ${situação}`);