//estrutura de dados condicionais

var precoProduto = 150;

if (precoProduto>=100){
    console.log("Valor a Pagar: "+(precoProduto*0.9)); //10%
} else {
    console.log("Valor A Pagar: "+precoProduto);
}

//switch case
var mes = 7;

switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
        case 2:
            console.log("Fevereiro");
            break;
            case 1:
        console.log("Março");
        break;
        case 3:
        console.log("Abril");
        break;
        case 4:
        console.log("Maio");
        break;
        case 5:
        console.log("Junho");
        break;
        case 6:
        console.log("Julho");
        break;
        case 7:
        console.log("Agosto");
        break;
        case 8:
        console.log("Setembro");
        break;
        case 9:
        console.log("Outubro");
        break;
        case 10:
        console.log("Novembro");
        break;
        case 11:
       console.log("Dezembro");
        break;
    default: 
    console.log("Outro Més");
        break;
}


// laços de repetição ( for , while)
//for (Início; Fim; Incremento)
    for (let i=0; i<=100; i++){
        console.log(i);
    }

//While (condicional)
var numeroEscolhido = 4;
var continuar = true;
var contador = 0;
while (continuar){
    contador++;
    let numeroSorteado = Math.round(Math.random()*10); //Sortear numero enre 0 e 10
    if(numeroEscolhido==numeroSorteado){
        console.log("Acertou!!!")
        console.log("N° de tentativas: "+contador);
        continuar=false;
    }
}

//Funções - void //  return
//function return
function ola(nome){ //parâmetro
    return "Olá,"+nome+" Seja Bem Vindo!!"
} 
console.log(ola("Turma A"));

//function void
function hello(nome){
    console.log("Hello, "+nome)
    
}