// string em lista (array)

// revisão:
let school = "senai";
console.log(school);

console.log(school[4]); // puxando posição (começando do 0)

// cada letra em uma linha:
for (const i of school){
    console.log(i)
};

console.log(school.length); // quant. de caracteres 


// JOIN: 
let values = [1, 2, 3, 4, 5];
console.log(values.join()); // retornar tds os valores que ha dentro da lista 
console.log(values.join("-")); // caracter para separar valores (opcional)

// retornar o nome inteiro
values = ["B", "e", "l", "l", "a" ];
console.log(values.join("")); // substituir os separadores por nada ""

// STRING PRA LISTA:
let nome = "Isabelle Leite da Silva Maximo Ferreira";
console.log(nome);
console.log(nome.split()); // retorna td um valor só
console.log(nome.split("")); // cada letra como um valor
console.log(nome.split(" ")); // cada palavra como um valor

nome = "Isabelle, Ferreira"
console.log(nome.split(", ")) // cada palavra como um valor


