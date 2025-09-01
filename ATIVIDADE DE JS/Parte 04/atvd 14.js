// 14. Crie um programa que pergunte o horário atual (número inteiro de 0 a 23).
// • Se entre 6 e 12 → “Bom dia”
// • Se entre 12 e 18 → “Boa tarde”
// • Se entre 18 e 23 → “Boa noite”
// • Senão → “Boa madrugada”

let horário = 17;
let oi = (horário >= 6 && horário < 12) ? "bom dia" : (horário >= 12 && horário < 18) ? "boa tarde": (horário >= 18 && horário < 24) ? "boa noite": "boa madrugada";

console.log(oi);