// 6. Crie um array com pelo menos 6 nomes de cidades.
// o Exiba no console a quantidade total de elementos.
// o Exiba no console o primeiro e o último elemento.
const cidades = ["Poá", "Suzano", "Mogi das Cruzes", 
                "Itaquaquecetuba", "Calmon Viana", "Ferraz de Vasconcelos"];
console.log(`Total de cidades: ${cidades.length}`);

console.log(`Primeira cidade: ${cidades[0]}
Ultima cidade: ${cidades[cidades.length - 1]}`);

// 7. Crie um array de 4 cores e altere a segunda cor para "Preto".
const cores = ["Amarelo", "Roxo", "Vermelho", "Cinza"];
console.log(cores);
cores[1] = "Preto";
console.log(cores);

// 8. Crie um array com 5 valores e remova o último elemento usando .pop(). Depois, adicione um novo valor ao final usando .push().
const livros = ["Quarta Asa", "Chama de Ferros", "Jantar Secreto", "Jane Eyres", "A Garota do Lago"];
console.log(livros);

livros.pop();
console.log(livros);

livros.push("O colecionador")
console.log(livros);

//9. Crie um array de frutas e altere o valor da última fruta para "Abacaxi" sem usar .pop().
const frutas = ["Maça", "Uva", "Melancia", "Laranja", "Kiwi"];
console.log(frutas);
frutas[frutas.length - 1] = "Abacaxi";
console.log(frutas);

// 10.Crie um array com 3 valores diferentes e substitua todos os valores do array por "OK".
const valores2 = [19, "isa", true];
console.log(valores2);
valores2[0] = "OK;"
valores2[1] = "OK;"
valores2[2] = "OK;"
console.log(valores2);