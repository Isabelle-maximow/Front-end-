// nomes de variaveis podem inicar com letra, $ 

function exemplo(){
    if (true) {
        var x = 10;
        let y = 20;
        console.log("Dentro do bloco: ", x, y); // 10, 20
    }
    console.log("fora do bloco: ", x ); // 10 
    console.log("fora do bloco: ", y ); // erro - undefined
}

exemplo();


const aluno = {
    nome: "bebela",
    idade: 19,
};
console.log(aluno)

aluno.nome = "mimi"
console.log(aluno)

// msm const sendo um objeto ou array as propriedades ainda podem ser alteradas 

