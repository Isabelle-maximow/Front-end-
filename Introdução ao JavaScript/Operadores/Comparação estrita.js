console.log("1" == 1); // true 
// o js compara os valores - tenta converter os dados, e não os tipos
// por isso o uso do == pode ocasionar problemas
// para solucionar este problema, utilizamos a comparação estrita(identico)

console.log("1" === 1); // false - com 3 = ( === )

console.log(1 == true); // true
console.log(1 === true); // false

// == -> compara so o valor (faz conversão automatica de tipo)
// === -> compara  o valr e tipo (sem conversão)

console.log(null == undefined); // true 
console.log(null === undefined); // false
console.log(null !== undefined); // true

