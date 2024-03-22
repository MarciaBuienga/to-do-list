
const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-containeir');


function addTask(){
    if(inputBox.value === ''){
        alert('Digite uma tarefa');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = '';
    salvarDados();
}

listContainer.addEventListener("click", function(e){
   // e.preventDefault();

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        salvarDados();
    }

    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        salvarDados();
    }

}, false);

function salvarDados(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTasks();