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
h2.textContent = "list of tasks";
document.body.appendChild(h2);

const ul = document.createElement("ul");
const lil = document.createElement("li");
lil.textContent = "Study HTML"
ul.appendChild(lil);

const lil2 = document.createElement("li");
lil2.textContent = "Study CSS"
ul.appendChild(lil2);

const lil3 = document.createElement("li");
lil3.textContent = "Study JavaScript"
ul.appendChild(lil3);

document.body.appendChild(ul);


// INTERAGINDO COM EVENTOS
// 4. Crie um botão "Trocar Cor".
// Ao clicar nele:
// o O título <h1> deve trocar de cor (ex: vermelho, verde, azul) de forma
// alternada.
// o Use addEventListener("click", ...) para tratar o evento.

const button = document.createElement("button");
button.type = "button"; // ensure it's selectable by attribute
button.textContent = "change color";
document.body.appendChild(button)

const h1 = document.getElementById("titulo");
let colors = ["red", "green", "blue"];
let currentColorIndex = 0

if (button && h1) {
    button.addEventListener("click", function(){
        h1.style.color = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    });
} else {
    console.warn('Button or h1 not found - skipping color toggle setup.');
}


// SELETORES MODERNOS
// 5. Use querySelector() e querySelectorAll() para:
// o Selecionar o primeiro <li> e deixá-lo sublinhado;
// o Selecionar todos os <li> e alterar a cor de fundo para cinza claro;
// o Selecionar o botão pelo atributo (ex: button[type="button"]) e alterar
// seu texto para "Cliquei aqui!".

// deixar o li sublinhado:
const li1 = document.querySelector("li");
if (li1) li1.style.textDecoration = "underline"

// alterando a cor do fundo do li:
const allLi = document.querySelectorAll("li");
allLi.forEach(function(li){
    li.style.backgroundColor = "lightgray";
});

// selceionando o botao plo atrib. e ,mudando txt:
const botao = document.querySelector('button[type="button"]');
if (botao) botao.textContent = "i clicked here!"

