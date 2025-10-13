const titleE1 = document.querySelector("$person-name");
console.log(titleE1.textContent); // mostra o valor
console.log(titleE1.id); // mostrando o id
console.log(titleE1.className); // mostrando a classe
console.log(titleE1.tagName); // mostra a tag 

titleE1.textContent = "Natan Paulo"; // atualizando o valor
titleE1.innerHTML = "<strong>Natan Paulo</strong>"; // texto interpreta tags html
titleE1.computedStyleMap.color = "red";
titleE1.style = "color: green; background-color: yellow;"; // manipulando css
titleE1.style.fontSize = "70px"; // alt
titleE1.style.border = "5px solid blue"; // alt

titleE1.style.display = "none"; 
titleE1.style.display = "block"; 