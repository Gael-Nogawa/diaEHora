const h2 = document.querySelector('.container h2')
const data = new Date();

function getDiaSemanaTexto(diaSemana){
    const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    return diasSemana[diaSemana];
}   
   
function getNomeMes(numeroMes){
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro','novembro', 'dezembro'];
    return meses[numeroMes];
}
   
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

let hora = data.getHours();
let min = data.getMinutes();

let novoFormato = hora >= 12 ? 'PM' : 'AM';
hora = hora % 12;

//montrando o '0' como '12'
hora = hora ? hora : 12;
min = min < 10 ? `0 ${min}` : min;

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
   
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}, `+
    `${hora}:${min} ${novoFormato}`
}

h2.innerHTML = criaData(data);

//------------------TIMER

function criaSegundos(segundos){
    const dia= new Date(segundos * 1000);

    return dia.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
};

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar')
  

let segundos = 0;
let timer;

function iniciaRelogio (){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaSegundos(segundos);
    },1000)
};   

iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado')
    clearInterval(timer);
    iniciaRelogio();
})

pausar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.classList.add('pausado')
    
})
  
zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
    relogio.classList.remove('pausado')

})
//---------------LISTA DE TAREFAS

const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const ulTarefa = document.querySelector('.tarefa');

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    ulTarefa.appendChild(li);
    limpaInput();

}

inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

function limpaInput(){
    inputTarefa.value = " ";
    inputTarefa.focus();
}

btnTarefa.addEventListener('click', function(){
    
    //if(inputTarefa.value == ' ') -> Ele retorna 'false' por conta do ' '.
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});




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

