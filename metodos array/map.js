const numbers = [1, 2, 3, 4, 5];
const double = numbers.map((n) => n * 2);
console.log(double);

const potencia = numbers.map((n) => Math.pow(n, 2));
console.log(potencia);

// conversão fahrenheit p celcius
const fahrenheit = [0, 32, 45, 91, 93, 121]
const celsius = fahrenheit.map((t) => Math.round (((t - 32)*5) / 9));
console.log(celsius);

// colocar em maiusculas
const people = [
    {nome: "nome0"},
    {nome: "nome1"},
    {nome: "nome3"},
    {nome: "nome2"},
]

const maiusculas = people.map((p) => p.name.toUpperCase());
console.log(maiusculas);