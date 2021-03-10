
// CONSTANTES DEL MENÚ RESPONSIVE 
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")

// CONSTANTES DEL BOTÓN HAMBURGUESA
const hamburguesa= document.querySelector('#hamburguesa button');

// VARIABLES Cambiar color del menu al estar arriba
const menu = document.getElementById('menu');
const logo = document.getElementById('logo');
let ubicacionPrincipal = window.pageYOffset;


// Menu responsive 
menuBtn.addEventListener("click",  () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
  hamburguesa.classList.toggle('open');
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
    hamburguesa.classList.remove('open');
  });
});


//Cambiar color del menu al estar arriba

window.addEventListener("scroll", function(){
  var scroll = document.documentElement.scrollTop;
  if(scroll >0){
      menu.style.background = '#4357ad';
      logo.style.color = '#fff';
  }else {
      menu.style.background = 'rgba(26, 27, 48, 0.5)';
      logo.style.color = '#4357ad';
  }

  //Ocultar menu al hacer scroll 
  let desplazamientoActual = window.pageYOffset;

  if(ubicacionPrincipal >= desplazamientoActual){
    menu.style.top='0';
  }else {
    menu.style.top='-100px';
  }
  ubicacionPrincipal = desplazamientoActual;

}); 


