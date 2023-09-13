(function(){//Funcion que se llame a si misma y proteger el codigo
    
    const sliders = [...document.querySelectorAll('.testimony__body')];//obtendra todos los elementos con la clase de testimonios que son los 4 y los ... es porque pasan a ser un array
    const buttonNext = document.querySelector('#next');//obtendra el quary selecto que es de la flecha
    const buttonBefore = document.querySelector('#before');//lo mismo con el boton de atras
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });//este es un evento para next y manda un 1 cuando le den click

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });//este es un evento para next y manda un -1 cuando le den click

    /*recordemos que cada slider tiene un dataset " data-id="2" "*/
    const changePosition = (add)=>{ //funcion 
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;//obtener el slider actual es decir que en esta variable guardara el id del slider correspondiente 
        value = Number(currentTestimony);//convierte a numero el id
        value+= add;//va sumar el valor actual es decir dependiendo de si es adelante o atras se le suma o resta 


        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');//remueve la clase para que ya no se vea en la pagina
        
        /*esta condicional es paracuando el valor sea 0
        y no se pase de 4 */
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
            //slider.lenght obtiene los elementos totales
            //si es 0 mandara el ultimo slider que es 3 o si pasa el numero maximo mandara el (1 es decir a el primer slider)
        }

        sliders[value-1].classList.add('testimony__body--show');
        /*value-1 es para el 0 del array, obtiene sus clases y la 
        muestra en la pagina */

    }

})();