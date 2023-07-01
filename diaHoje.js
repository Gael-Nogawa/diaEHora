
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
