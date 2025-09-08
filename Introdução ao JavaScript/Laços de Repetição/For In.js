//  percorre indices/propriedades de objetos e/ou arrays 

const person = {
    name: "Isabelle",
    age: 25,
    city: "Sao Paulo"
};

for (const prop in person ) {
    console.log(`propriedades: ${prop}`);
}

for (const prop in person) {
    console.log(`Propriedades: ${prop}: ${person [prop]}`);
}