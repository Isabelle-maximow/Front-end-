const people = [
    {id: 1,
        nome: "isa",
        lastname: "ferreira",
        DataNasc: new Date (2006, 10, 26),
        address: {
            place: "Av. Brasil. 987",
            zipcode: "0655230",
            city: "SP"
        },
    },
    {id: 2,
        nome: "isabel",
        lastname: "ferrs",
        DataNasc: new Date (2005, 11, 26),
        address: {
            place: "Av. Brasil. 987",
            zipcode: "0655230",
            city: "SP"
        },
    },
];

console.log(people);

// convertendo em json:
// JSON -> javascript object notation 

// JSON.stringify()
// JSON.parse()
console.log(JSON.stringify(people)) // converter object em uma string/ json

// oposto:
const json = '[{"id":1,"nome":"isa","lastname":"ferreira","DataNasc":"2006-11-26T02:00:00.000Z","address":{"place":"Av. Brasil. 987","zipcode":"0655230","city":"SP"}},{"id":2,"nome":"isabel","lastname":"ferrs","DataNasc":"2005-12-26T02:00:00.000Z","address":{"place":"Av. Brasil. 987","zipcode":"0655230","city":"SP"}}]'

console.log(JSON.parse(json))