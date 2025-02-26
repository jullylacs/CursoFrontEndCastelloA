//Funções de Texto (String)

let texto = "Aula de JavaScript";

//contar os caracteres
console.log(texto.length);

//MAIÚSCULAS e minusculas
console.log(texto.toUpperCase()); //MAIÚSCULAS
console.log(texto.toLocaleLowerCase()); //minúsculas

//Partes do Texto
//substring (início, fim)
console.log(texto.substring(0,4));
//slice (quantidade)
console.log(texto.slice(-10));

//Substituir parte do texto
console.log(texto.replace("Java", "Type"));

//Tesoura (Trim) - Somente começo e fim
let texto1 = "  JavaScript  "
console.log(texto1);
console.log(texto1.trim());

//Separar texto (split) -Caracter Comum
let linguagens= "JavaScript, Python, PHP, Java, C#";
let vetorlinguagens = linguagens.split(", ")
console.log(linguagens);
console.log(vetorlinguagens);

//Desafio
let Caracter = "Bom Dia Com Muita Alegria"
let CaracterSemEspaco = Caracter.replaceAll(" ", "");
console.log(Caracter);
console.log(Caracter.length);
console.log(CaracterSemEspaco);
console.log(CaracterSemEspaco.length);