window.addEventListener('scroll', function()  {
    let barras = document.getElementsByClassName('skills');
    let posicion = window.innerHeight + 400;

    let word= document.getElementById('word');
    let excel= document.getElementById('excel');
    let outlook= document.getElementById('outlook');
    let indesign= document.getElementById('indesign');

    let espanol= document.getElementById('espanol');
    let catalan= document.getElementById('catalan');
    let ingles= document.getElementById('ingles');

    for(var i = 0; i < barras.length; i++) {
        var barra = barras[i];

        if(barra.getBoundingClientRect().top < posicion) {
            //Estamos en el skill
            word.classList.add('word');
            excel.classList.add('excel');
            outlook.classList.add('outlook');
            indesign.classList.add('indesign');

            espanol.classList.add('espanol');
            catalan.classList.add('catalan');
            ingles.classList.add('ingles');
        } else {
            //No estamos en el skill
            word.classList.remove('word');
            excel.classList.remove('excel');
            outlook.classList.remove('outlook');
            indesign.classList.remove('indesign');

            espanol.classList.remove('espanol');
            catalan.classList.remove('catalan');
            ingles.classList.remove('ingles');
        }

    }
});