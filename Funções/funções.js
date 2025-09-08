function saudaçao() {
    console.log("hello word!");
};
saudaçao(); // chama a função 

// acrescentando valores:
function saudaçao(sobrenome, nome) {
    console.log(`Hello ${nome} ${sobrenome}`);
};
saudaçao("isabelle", "Ferreira");
saudaçao("Wagner", "Máximo");
saudaçao("Edna", "Silva");