const tiempo = 6000;
var counter = 1;
const checkboxRef = document.querySelectorAll('.radioRef');

//Slider automatico
function automatico(){
  document.getElementById('radioRef' + counter).checked = true;
  counter++;
  if(counter > 3){
    counter = 1;
  }
}
var intervalos =setInterval(automatico, tiempo);

//Reinicia el temporizador del slider al hacer click sobre los botones
function reiniciar(){
    //Detiene los intervalos
    clearInterval(intervalos);
    //Le damos un nuevo intervalo de tiempo
    intervalos = setInterval(automatico, 10000);
}


checkboxRef.forEach(boton => {// Pone a la escucha cada boton
    boton.addEventListener('click', reiniciar);
});


// El cambio de sliders manual al pusar el boton funciona con css, 
// aquí solo pausamos y reiniciamos el temporizador del slider automatico. 
  