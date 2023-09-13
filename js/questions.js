(function(){//Autoinvocada para proteger archivos
    const titleQuestions = [...document.querySelectorAll('.questions__title')];//obtener todos los elemntos con esa clase y los ... para convertirlo en array

    console.log(titleQuestions)

    /*Por cada pregunta quiero su respuesta individual
    */
    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{//si se da click
            let height = 0;//calcular el alto del elemento
            let answer = question.nextElementSibling;//obtener al hermano de question es decir el parrafo de la pregunta 
            let addPadding = question.parentElement.parentElement;//obtenga a la pregunta que es y su padre que es questions padding 

            addPadding.classList.toggle('questions__padding--add');//para que agregue el padding boton de una transiccion 
            question.children[0].classList.toggle('questions__arrow--rotate');//hace que el elemento rote 

            /*si tiene un height = 0 (porque los pusimos todos asi)*/
            if(answer.clientHeight === 0){
                height = answer.scrollHeight;//tenga el alto minimo para que se muestre el elemento
            }

            answer.style.height = `${height}px`;//agrega la variable del height en unidad px
        });
    });
})();