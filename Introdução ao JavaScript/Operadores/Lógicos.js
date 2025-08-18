// or (ou) ==> &&
conso;le.log(false || false);
console.log(false || true);
console.log(true || false);
console.log(true || true);
// smp q tiver TRUE no OR, SEMPRE retornara true 

// end (e) ==> &
console.log(false && false);
console.log(false && true);
console.log(true && false);
console.log(true && true);
// smp q tiver FALSE no END, SEMPRE retornara false

// misturar end e or:
console.log(false || false || true) // true
console.log(true && true && false) // false
console.log(false || (false && true)) // false
console.log((false || false) && true) // false

// not (nao) ==> !