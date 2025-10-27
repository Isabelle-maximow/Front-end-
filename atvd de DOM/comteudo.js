// Em seguida, no JavaScript:
// o Exiba no console:
// ▪ O conteúdo do document;
// ▪ O conteúdo de document.body;
// ▪ O elemento com ID "titulo" usando getElementById;
// ▪ Todos os parágrafos com getElementsByTagName;
// ▪ Todos os elementos com classe "box" usando getElementsByClassName.

console.log(document);
console.log(document.body);
console.log(document.getElementById("titulo"));
console.log(document.getElementsByTagName("p"));
console.log(document.getElementsByClassName("box")); 

// CRIANDO E ADICIONANDO ELEMENTOS
// 3. Crie via JavaScript:
// o Um novo elemento <h2> com o texto "Lista de Tarefas";
// o Um elemento <ul> com três <li>:
// ▪ "Estudar HTML";
// ▪ "Estudar CSS";
// ▪ "Estudar JavaScript";
// o Adicione tudo isso dentro do body.

const h2 = document.createElement("h2");
h2.textContent = "lista de tarefas";
document.body.appendChild(h2);

const ul = document.createElement("ul");
const lil = document.createElement("li");
lil.textContent = "estudar HTML"
ul.appendChild(lil);

const lil2 = document.createElement("li");
lil2.textContent = "estudar CSS"
ul.appendChild(lil2);

const lil3 = document.createElement("li");
lil3.textContent = "estudar JavaScript"
ul.appendChild(lil3);

document.body.appendChild(ul);


// 4. Selecione todos os <li> da lista criada.
// Altere a cor do texto para verde escuro.
// Aumente o tamanho da fonte para 20px.
// Dica: use querySelectorAll() e um laço for...of para percorrer os itens.

const allLi = document.querySelectorAll("li");
for (const li of allLi) {
    li.style.color = "darkgreen";
    li.style.fontSize = "20px";
}

// ADICIONANDO UM NOVO PARÁGRAFO
// 5. Crie um novo parágrafo (<p>) abaixo da lista com o texto:
// "Essas são as principais tarefas de estudo."
// Altere o estilo:
// Cor do texto: marrom;
// Estilo da fonte: itálico.

const p = document.createElement("p");
p.textContent = "Essas são as principais tarefas de estudo";
p.style.color = "brown";
p.style.fontStyle = "italic";
document.body.appendChild(p);

// CRIANDO UMA NOVA SEÇÃO
// 6. Crie uma <section> e dentro dela:
// Um <h2> com o texto "Sobre o Curso";
// Dois <p> com textos explicativos, por exemplo:
// "O curso aborda fundamentos de programação e web."
// "Aprendemos sobre HTML, CSS e manipulação do DOM com JavaScript."
// Adicione essa seção ao final do body.

const section = document.createElement("section");

const h2Section = document.createElement("h2");
h2Section.textContent = "Sobre o curso";
section.appendChild(h2Section);

// ESTILIZANDO A SEÇÃO
// 7. Aplique estilos à seção criada:
// Fundo com cor clara (ex: #e0f7fa);
// Borda azul (2px solid #0097a7);
// Espaçamento interno (padding: 10px);
// Margem superior (margin-top: 20px);
// Título e parágrafos com tons de azul esverdeado.

const p1 = document.createElement("p");
p1.textContent = "O curso aborda fundamentos de programação e web";
section.appendChild(p1);
const p2 = document.createElement("p");
p2.textContent = "Aprendemos sobre HTML, CSS e manipulação do DOM com JavaScript";
section.appendChild(p2);
section.style.backgroundColor = "#e0f7fa";
section.style.border = "2px solid #0097a7";
section.style.padding = "10px";
section.style.marginTop = "20px";
h2Section.style.color = "#00695c";
p1.style.color = "#00897b";
p2.style.color = "#00897b";
document.body.appendChild(section);


// EXPLORANDO A ÁRVORE DOM
// 8. Crie um laço que percorra todos os elementos da página usando
// querySelectorAll("*").
// Para cada elemento encontrado, mostre no console o nome da sua tag.
// Exemplo de saída:
// Elemento encontrado: H1
// Elemento encontrado: P
// Elemento encontrado: DIV

const allElements = document.querySelectorAll("*");
for (const element of allElements) {
    console.log("Elemento encontrado: " + element.tagName);
}


