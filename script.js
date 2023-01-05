function toggleMode(){

    const html = document.documentElement
    
    /* Escrito a mão 
    
    if(html.classList.contains('light')){
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }   
    
    */



    /* Função Especifica ja Criada */
    html.classList.toggle('light')
}