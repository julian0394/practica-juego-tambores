
// Instanciamos el array con todos los elementos con la clase '.tambor'.
const botones = document.querySelectorAll('.tambor');

// Hacemos un Event listener general en toda la pagina para que reconozca si se toca una tecla del teclado.
$(document).keydown(manejoDeTeclado);

// Buscamos todos los elementos con la clase ".tambor" e instanciamos un Event Listener a cada uno.
$(".tambor").click(manejoDeClick);

// Funciones llamadas por los Listener
function manejoDeClick() {
    let btn = this.textContent;  /*This = boton especifico clickeado.*/
    reproducir(btn);
};

function manejoDeTeclado(event) {   /*No entiendo como está recibiendo el evento pero funciona*/
    reproducir(event.key);
};



function reproducir(btn) {
    let tambor;
    switch(btn) {
        case 'w':
            tambor = 'tom-1';      
            elegirSonido(tambor);
            animacionTeclaPresionada('w');
            break;
        case 'a':
            tambor = 'tom-2';
            elegirSonido(tambor);
            animacionTeclaPresionada('a');
            break;
        case 's':
            tambor = 'tom-3';
            elegirSonido(tambor);
            animacionTeclaPresionada('s');
            break;
        case 'd':
            tambor = 'tom-4';
            elegirSonido(tambor);
            animacionTeclaPresionada('d');
            break;
        case 'j':
            tambor = 'snare'; 
            elegirSonido(tambor);
            animacionTeclaPresionada('j');
            break;
        case 'k':
            tambor = 'kick-bass';
            elegirSonido(tambor);
            animacionTeclaPresionada('k');
            break;
        case 'l':
            tambor = 'crash';
            elegirSonido(tambor);
            animacionTeclaPresionada('l');
            break;
        default:
            console.log('Tecla no importante presionada');
            break;
    }
}


function elegirSonido(tambor) {
    let sonido = new Audio(`sonidos/${tambor}.mp3`);
    sonido.play();
}

function animacionTeclaPresionada(letra) {
    const botonPresionado = document.querySelector(`.${letra}`);    // Instancia nuevamente el boton (para mayor prolijidad y reusabilidad).
    botonPresionado.classList.toggle('presionado');                    // Le activa la clase ".pressed".

    // Timeout para eliminar la clase "pressed"
    setTimeout( ()=> {botonPresionado.classList.remove('presionado')}, 130); // Llaves no necesarias pero ayudan a visibilizar.
}
