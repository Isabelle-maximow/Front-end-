// descobrir maiores de 18 anos:
const people = [ 
    {nome: "isa", age: 19, gender: "F"},
    {nome: "joao", age: 30, gender: "M"},
    {nome: "maria", age: 15, gender: "F"},
    {nome: "antonio", age: 40, gender: "M"}
]

const m = people.filter((p) => p.age >= 18);
console.log(m);
const n = people.filter((p) => p.age >= 18 && p.gender == "F");
console.log(n);
const x = people.filter((p) => p.age >= 18 && p.gender == "M");
console.log(x);
