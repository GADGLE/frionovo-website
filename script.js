document.addEventListener('DOMContentLoaded', function (){
    const menu = document.getElementById('menu');
    const ul = document.getElementById('ul')

    menu.addEventListener('click', function (){
        ul.classList.toggle('display')
    });

})