// forma moderna 
// document.querySelector()
// document.querySelectorAll()
// Element.querySelector()
// Element.querySelectorAll()

console.log(document.querySelectorAll("*")); // universal
console.log(document.querySelectorAll("#person-name")); // id

console.log(document.querySelectorAll("p")); // tag
console.log(document.querySelectorAll(".title")); // class
console.log(document.querySelectorAll("a[href]")); // atributo

console.log(document.querySelectorAll("a[href='https://github.com/'"));

// iterando toda a arvore DOM...
for (const al of document.querySelectorAll("*")) {
    console.log("el", el);
}
