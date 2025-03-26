// DOM -> Jogo Quiz Interativo

let perguntas = [];
let proximaPergunta = 0;

//DOM -> elementos

let perguntaElement = document.getElementById("pergunta");
let opcoesElement = document.getElementById("opcoes");
let proximaElement = document.getElementById("proxima");
let respostaElement = document.getElementById("resposta");

//fetch -> para pegar as perguntas do arquivo Json
fetch("perguntas.json")
    .then(response => response.json())
    .then(data => {
        perguntas = data;
        carregarPerguntas(); //função para carregar o html 
    })

    //DOM -> funções
    function carregarPerguntas(){}