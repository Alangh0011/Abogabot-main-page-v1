(function(){
    const openButton = document.querySelector('.nav__menu');//obtendra el icono hamburguesa 
    const menu = document.querySelector('.nav__link');//es el ul del menu 
    const closeMenu = document.querySelector('.nav__close');//elementro que cierra el menu que es el tache 

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');//vaya a sus clases en el html y agrega nav__link--show
    });//cuando se de click en la hamburguesa entonce

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');//la quita de la classe 
    });//Cierre al menu

    


})();