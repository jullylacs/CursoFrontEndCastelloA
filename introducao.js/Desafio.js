const prompt = require("prompt-sync")();
//===Verificação de idade===
// Solicita a idade do usuário
var idade = Number(prompt("===Digite sua idade!: "));

// Verifica a idade e exibe a mensagem correspondente
if (idade < 18) {
    console.log("Você é menor de idade.");
} else if (idade >= 18 && idade < 60) {
    console.log("Você é adulto.");
} else {
    console.log("Você é idoso.");
}


//===Tabuada===
var numero = 5;
 for(let i= 0; i<=20; i++) {
    console.log(numero+" X "+i+" = " +(numero*i));
 }

 //===N° Pares===
 for(let i = 1; i<=20;i++){
    if(i%2==0){
        console.log("N°"+i+" é Par")
    }
 }
