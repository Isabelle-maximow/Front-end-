let nome, idade;
nome = "isabelle";
idade = 19;
endereco = {
    logradouro: "Av. Brasil",
    cidade: "SP",
    estado: "SP",
};

// CONCATENACAO (ANTIGO):
console.log(nome + " tem " + idade + " anos. Reside em " + endereco);
console.log(nome + " tem " + (idade + 1) + " anos. Reside em " + endereco);

// INTERPOLACAO (NOVO):
console.log(`${nome} tem ${idade} anos. Reside em ${endereco}`) // crase ``

// js n consegue transformar object em string, para isso é 
// preciso usar o metodo "JSON.stringify"

console.log("Reside em ", + endereco.logradouro);

console.log(`${nome} tem ${idade} anos. Reside em ${JSON.stringify(endereco)}`);