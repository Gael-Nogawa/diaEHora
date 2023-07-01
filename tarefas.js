//---------------LISTA DE TAREFAS

function todaTarefa() {
    const inputTarefa = document.querySelector(".input-tarefa");
    const btnTarefa = document.querySelector(".btn-tarefa");
    const ulTarefa = document.querySelector(".tarefa");

    function criaLi() {
        const li = document.createElement("li");
        return li;
    }

    function criaTarefa(textoInput) {
        const li = criaLi();
        li.innerText = textoInput;
        ulTarefa.appendChild(li);
        limpaInput();
        criaBotaoApagar(li);
        salvarTarefas();
    }

    function criaBotaoApagar(li) {
        // onde ele vai adicionar
        li.innerText += " ";
        const botaoApagar = document.createElement("button");
        botaoApagar.innerText = "apagar";
        li.appendChild(botaoApagar);
        botaoApagar.setAttribute("class", "Apagar");
        botaoApagar.setAttribute("title", "Apagar esta tarefa");
    }

    inputTarefa.addEventListener("keypress", function (e) {
        if (e.keyCode === 13) {
            if (!inputTarefa.value) return;
            criaTarefa(inputTarefa.value);
        }
    });

    function limpaInput() {
        inputTarefa.value = " ";
        inputTarefa.focus();
    }

    btnTarefa.addEventListener("click", function () {
        //if(inputTarefa.value == ' ') -> Ele retorna 'false' por conta do ' '.
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    });

    document.addEventListener("click", function (e) {
        const el = e.target;

        if (el.classList.contains("Apagar")) {
            el.parentElement.remove();
        }
    });

    function salvarTarefas() {
        const liTarefas = ulTarefa.querySelectorAll("li");
        const listaDeTarefas = [];

        for (let tarefa of liTarefas) {
            let tarefaTexto = tarefa.innerText; // Pegando o valor da tarefa e passando para a variável.
            tarefaTexto = tarefaTexto.replace('apagar', '').trim();
            // Na tarefa, para não aparecer o 'apagar', ele substitui por ' ';
            // o replace substitui o conteudo. E o conteudo foi apagar (que está no innerText)
             //.trim() apaga os espaçoes que estão do lado da tarefa.
            listaDeTarefas.push(tarefaTexto);

        }
        
        const tarefasJSON = JSON.stringify(listaDeTarefas);
        console.log(listaDeTarefas)
    }

    /* function criaLi(){
      const li = document.createElement('li');
      return li;
  }
  
  
  inputTarefa.addEventListener('keypress', function(e){
      if (e.keyCode === 13){
          if (!inputTarefa.value) return;
          criaTarefa(inputTarefa.value)
         
      }
  });
  
  
  
  function criaBotaoApagar(li){
      li.innerText += '';
      const botaoApagar = document.createElement('button');
      botaoApagar.innerText = 'Apagar';
      botaoApagar.setAttribute('class', 'apagar');
      botaoApagar.setAttribute('title', 'Apagar esta tarefa');
      li.appendChild(botaoApagar);
  }
  
  function criaTarefa(textoInput){
      const li = criaLi();
      li.innertText = textoInput; 
      ulTarefa.appendChild(li);
      li.classList.add('add-tarefa');
      console.log(li.value);
      //ver o valor do li;
  
      limpaInput();
      criaBotaoApagar(li);
         
  }
  
  btnTarefa.addEventListener('click', function(e){
      if (!inputTarefa.value) return;
      criaTarefa(inputTarefa.value);
  });
  
  function limpaInput(){
      inputTarefa.value = "";
      inputTarefa.focus();
  }
   */
}

todaTarefa();