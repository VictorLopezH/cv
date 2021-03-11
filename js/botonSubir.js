const botonSubir = document.getElementById("botonSubir");
const posicionMostrar= 500;

botonSubir.addEventListener("click", subir);

function subir(){
var scrollActual = document.documentElement.scrollTop;

    if (scrollActual > 0){
        window.scrollTo (0, 0);
        botonSubir.style.transform = "scale(0)";
    }
}

//Hacer aparecer y desaparecer el boton 
window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;

    if (scroll > posicionMostrar){
        botonSubir.style.transform = "scale(1)";
    }else if(scroll < posicionMostrar){
        botonSubir.style.transform = "scale(0)";
    }
}