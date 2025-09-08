// percorre valores de arrays, strings ou coleções iteraveis:
const nomes = ["Pietro", "Arthur", "Marcus"];
for (let i = 0; i < 3; i ++){
    console.log(nomes [i]);
}

// e se houver uma lista maior:
const nomes2 = ["Pietro", "Arthur", "Marcus", "Hugo", "Gaby"];
for (let i = 0; i < nomes2.length; i++){
    console.log(nomes2 [i]);
}

// percorre valores de arrays, strings ou coleções iteraveis:
const nomes3 = ["Pietro", "Arthur", "Marcus", "Hugo", "Gaby"];
for (const nome of nomes3) {
    console.log(nome)
}