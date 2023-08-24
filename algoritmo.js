const idSegundos = document.querySelector("#segundos");
const idMinutos = document.querySelector("#minutos");
const idHoras = document.querySelector("#horas");
const h1Contador = document.querySelector("#resultado");

function iniciar() {
    let segundos = parseInt(idSegundos.value);
    let minutos = parseInt(idMinutos.value);
    let horas = parseInt(idHoras.value);
    
    setInterval(() => {
        if (horas>0 && minutos === 0 && segundos === 0) {
            horas--;
            minutos = 60;
        }
        
        if (minutos>0 && segundos === 0) {
            minutos--;
            segundos = 60; 
        }

        if (segundos>0) {
            segundos--;
        }
        h1Contador.innerHTML = `${horas}:${minutos}:${segundos}`;
    }, 1000);
}