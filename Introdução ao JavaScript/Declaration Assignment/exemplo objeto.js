const person = {
    name: "isa",
    age: 25,
    address: {
        street:"Av. Brazil",
        city: "Poá",
    },
};

console.log(person)
console.log(person.name)
console.log(person.age)

console.log(`${person.name} tem ${person.age} anos e residse na cidade ${person.address.city} `);
 // OBS: valores dentro de "objeto" e "array", podem ser atualizados dentro de uma "const"
person.name = "bella" // atualizando 
person.address.city = "Mogi" //atualizando
person.weight = 60 // inserindo novas infos 

console.log(person)
