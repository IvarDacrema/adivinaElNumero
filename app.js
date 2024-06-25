let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento('p', `Acertaste al numero secreto en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`)
        document.getElementById('reiniciar').removeAttribute("disabled");
    } else {
        if(numeroSecreto>numeroUsuario){
            asignarTextoElemento('p', "El numero es más grande")
        } else {
            asignarTextoElemento('p', "El numero es menor")  
        }
        intentos++
        limpiarCaja();
    return
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = "";
}

function asignarTextoElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.textContent = texto;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1
    console.log(numeroGenerado);
    if (numerosSorteados.length==numeroMaximo) {
        asignarTextoElemento('p', `Ya fueron jugados todos los elementos de la lista`)
    } else if (numerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        numerosSorteados.push(numeroGenerado);
        console.log(numerosSorteados);
        return numeroGenerado;
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', "El Numero Secreto")
    asignarTextoElemento('p', `Indicar un numero del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}

condicionesIniciales();