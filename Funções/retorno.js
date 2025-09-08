function sum ( n1, n2) {
    console.log(n1 + n2);
}
sum(2, 1);

// outra maneira de se fazer:
function sum (n1, n2) {
    const result = n1 + n2;
    return result; 
}
const result = sum (1, 2);
console.log(result);

// SIMPLIFICANDo:
function sum (n1, n2) {
    return n1 + n2; 
}
console.log(sum(1, 2));