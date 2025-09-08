// for é composto por 3 etapas 
// for (variavel; condição; condição de incremento)

for (let i = 1; i <= 10; i++){
    console.log("Contagem progressiva: ", i);
};
console.log("Fim dp programa!");

for (let i = 10; i > 0; i--){
    console.log("Contagem regressiva: ", i);
};
console.log("fim do programa!");

// break:
// interrompe um laço antes do final 

for (let i = 1; i <= 10; i++){
    if (i == 5) {
        console.log("parando no 5");
        break;
    }
    console.log("i = " + i ); 
}

// CONTINUE:
// pula para a proxima iteração sem executar o restante do codigo 
for (let i = 1; i <= 5; i++) {
    if ( i === 3) {
        continue;
    }
    console.log(" i = " + i);
}

// laço alinhado ( loop dentro do loop ):
// bom para tabelas ou combinações:
for (let i = 1; i <= 3; i++){
    for (let j = 1; j <= 2; j++){
        console.log (`i = ${i}, j = ${j}`);
    }
}