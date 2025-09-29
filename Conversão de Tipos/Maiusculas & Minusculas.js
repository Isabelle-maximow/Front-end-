let frase = "my name is Isabelle. Isabelle Ferreira!";
console.log(frase);

console.log(frase.toLowerCase()); // minusculas;
console.log(frase.toLocaleUpperCase()); // maiuscula;

// deixar o BD com um padrão

// teria que criar função para deixar apenas as primeiras letras em maiusculas 
// FUNÇÃO PARA ISSO: 
function maiusculas(frase) {
    return frase 
    .split (" ") // espaço entre palavras 
    .map(
        (frase) => 
            frase.charAt(0).toUpperCase() + frase.slice(1).toLowerCase()
    ) // map -> retorna a posição esoecifica de cada caractere string 
    .join(" ");
};

console.log(maiusculas("isabelle ferreira"))