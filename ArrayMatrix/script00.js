// Arrays and Matrix (vetores e matrizes)
//declarar um array => []
let array = []; 
let numberArray = [1,2,3,4,5,6,7,8,9];
let textArray = ["Sapato", "Bola", "Caixa"];
let mixArray = [1, "Nome", true];

//Como acessar os elementos 
console.log(textArray[1]); //indice
console.log(numberArray[8]);

//Contar elementos de um Array (length)
console.log(numberArray.length); //9
console.log(textArray.length); //3

//Adicionar elementos em um Array
//No começo (0) unshift
textArray.unshift("Cachorro");
console.log(textArray);
//No final - push()
textArray.push("Casa");
console.log(textArray);

//Alterar o valor de um elemento do Array
textArray[2] = "Carro";
console.log(textArray);

//Remover Elementos do Array
//do Começo - shift
textArray.shift();
//do Meio - splice(indice, quantidade)
textArray.splice(1,1); //Carro
console.log(textArray);
//do Fim
textArray.pop();
console.log(textArray);

//percorrero um array

for(let i=0; i<numberArray.length; i++){
    console.log("Número["+i+"]="+numberArray)
};


//forEach
numberArray.forEach(Element => {
    console.log(Element)
});

//IndexOf=>Retorna o indice do elemento
console.log(mixArray.indexOf("Nome"));
console.log(numberArray.indexOf(10));
