//situação de aprendizagem 01 - Array e Matrix
//Calculadora de Média
const prompt = requir("prompt-sync")();

var notas = []; //declaração de um vetor

//função para adiocionar nota -> media
function adicionarNota(){
    let nota = Number(prompt("Informe a nota: "))
    media.push(nota);
    console.log("Nota adicionada com sucesso");
}
//função para calcular a média
function calcularMedia(){
    if(notas.length === 0) return;
    let soma = notas.reduce((x,y)=>x+y);
    let mediaFinal = (soma/notas.length);
    console.log("A média é"+mediaFinal)
}

//menu de opções
function menuOpcoes(){
    let continuar = true;
    while(continuar){
    console.log("===Calculadora Média===");
    console.log("|1. Adicionat Nota     |");
    console.log("|2. Calcular Média     |");
    console.log("|3. Sair               |");
    console.log("========================");
    let operacao = prompt("Informe a Opção Desejada")
    switch(operacao){
        case "1": adicionarNota();break;
        case "2": calcularMedia();break;
        case "3": continuar = false;break;
        default: console.log("Opção inválida");break;
    }//fim do switch
  }//fim do while
  console.log("Saindo...");
}

menuOpcoes();