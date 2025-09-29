// data pra string
console.log(new Date());
console.log(new Date("30/10/2025")); // errado
// não funciona pois o date funciona no formato ISO
console.log(new Date("30/10/2025"));

// convertendo (data p string):
console.log(new Date().toString()); // convertendo em string 

console.log(new Date().toISOString()); // convertendo 
