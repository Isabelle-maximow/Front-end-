let x = 10;
console.log(x);

let x = 100;
console.log(x); // com o let não podemos REDECLARAR variaveis - somente tirando o let

{
    console.log(x);
    x = 20;

    let y = 30;
    console.log(y);
    {
        console.log(y);
    }
}

console.log(x); // agr esta valendo 20

console.log(y); // deu erro - mostra que o y n esta definido - isso pq:
// diferente do var - que tem o escopo de função - o let tem o escopo de bloco (entre{})

// quando criado uma variavel let dentro do bloco ela so existe dentro dele.



