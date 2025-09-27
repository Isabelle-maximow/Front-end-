// 2. Tabuada Simples
// Crie uma função que receba um número e mostre a tabuada dele até 10. Use for e
// depois faça uma versão com while.

function tabuadaFor(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

function tabuadaWhile(n) {
    let i = 1;
    while (i <= 10) {
        console.log(`${n} x ${i} = ${n * i}`);
        i++;
    }
}

console.log("tabuada usando for:");
tabuadaFor(5);
console.log("tabuada usando while:");
tabuadaWhile(5);