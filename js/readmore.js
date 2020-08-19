let i=0;
let button=document.querySelector('#readmore-button').addEventListener('click',function(){
    if(!i){
        document.getElementById('readMore').style.display='inline';
        document.getElementById('readmore-button').innerHTML='Mostrar menos <i class="icono-readmore fas fa-angle-up fa-lg"></i>';
        i=1;
    }else{
        document.getElementById('readMore').style.display='none';
        document.getElementById('readmore-button').innerHTML='...Mostrar más experiencias <i class="icono-readmore fas fa-angle-down fa-lg"></i>';
        i=0;
    }
})