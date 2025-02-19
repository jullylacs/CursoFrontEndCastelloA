// declaração de variáveis e constantes

let nome = "João"   //string
nome = "José"       //Retribuição de valor let
//let nome = "pedro", erro - Uma vez declarada LET, não pode ser redeclarada

var idade = 25;     //Numeric
idade = 26;         //Rearibuição de valor
var idade = 30;     //Redeclarar

const PI = 3.1415;  //Numeric
//PI = 3.1954         //erro - Não pode retribuir

let teste = true;    //Boolean
var x =null;        //Null
var y;              //undefined

console.log("Nome: "+nome);
console.log("idade: "+idade);
console.log("PI: "+PI);
console.log("Teste: "+teste);
console.log("Undefined: "+y);
console.log("Null: "+x);

//---------------------------------------------------------------------------------
//Tipos de operadores

// Operadores Aritméticos (+, -, *, /, %)
var a = 10;
var b = 3;
console.log("Soma: "+(a+b));            //13
console.log("Subtração: "+(a-b));       //7
console.log("Multiplicação: "+(a*b));   //30
console.log("Divisão: "+(a/b));         //3.333
console.log("Resto: "+(a%b));           //1

// Operadores Relacionais (>,>=,<,<=,==,===)

var a = 10      //var mumeric
var b = 20      //var numeric
var c = "10"    // var string

console.log("a>b: "+(a>b));       //comparação maior
console.log("a==c: "+(a==c));     //igualdade simples
console.log("a===c: "+(a===c));   //igualdade estrita


//operadores lógicos (&& - E, || - OU, ! - Não )
var nota1 = 5;
var nota2 = 8;

console.log("aprovação: "
    +(nota1>7 && nota2>7)); //False

console.log("aprovação: "
    +(nota1>7 || nota2>7)); //True

console.log(!true);         //false (operador da negação)
console.log(!false);        //true (operador da negação)