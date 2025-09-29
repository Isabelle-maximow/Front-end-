let frase = "today is a good day!"

// procurar se tem determinada palavra na string:
console.log(frase.includes("!")); // retorna true - because exists 
console.log(frase.includes("today")); // true 
console.log(frase.includes("Today")); // false (por ser maiuscula)

console.log(frase.toLocaleLowerCase().includes("Today")); // alternativa para encontrar a palavra (tranforma td em minusculo e procura)