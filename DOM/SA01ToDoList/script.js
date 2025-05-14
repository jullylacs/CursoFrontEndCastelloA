//construir a aplicação do ToDoList -> DOM (HTML/CSS)
//style do body
document.body.style.backgroundColor = "lightgray";
document.body.style.margin = "0";
document.body.style.textAlign = "center";
document.body.style.fontFamily = "Arial";
//style do container
let container = document.querySelector(".container");// variável simples
container.style.width = "50%";
container.style.backgroundColor = "aliceblue";
container.style.margin = "auto";
container.style.padding = "30px";
container.style.borderRadius = "15px";

//lógica do funcionamento da Lista de Tarefas

let tarefa = document.getElementById("tarefa"); //pega as informações do input tarefa

document.getElementById("btnEnviar").addEventListener(
    "click", criarTarefa
); //ouvinte para o botão

function criarTarefa(){ //ação após apertar o botão
    let texto = tarefa.value.trim();
    if(texto ==="") return; //interrompe a function
    //criar item da lista
    let li = document.createElement("li");
    li.innerHTML = texto+'<button class="btnRemover" onclick="removerTarefa(this)">Remover</button>';
    //adicionar tarefa na lista de tarefas
    let ul = document.getElementById("listaTarefas");
    ul.appendChild(li);
    tarefa.value = "";
}

//botão Remover - 

function removerTarefa(botao){
    botao.parentElement.remove();
}
