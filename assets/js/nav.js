'use strict'

const listElements = document.querySelectorAll('.list__button--click');
const opend = document.querySelector('#open_menu');
const cloused = document.querySelector('#close_menu');
const navegationMenu = document.querySelector('#navegation');
const overally = document.querySelector('#overally');


// Movil menu Animated
listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {
        let height = 0;
        let listShow = listElement.lastElementChild;
        if(listShow.clientHeight == 0) {
            height = listShow.scrollHeight;
        }
        listShow.style.height = `${height}px`;
    });
});


// Menu Movile + Overalli Controll
opend.addEventListener('click', ()=>{
    (navegationMenu.classList.contains('visible')) ? navegationMenu.classList.remove('visible') : navegationMenu.classList.add('visible');
    overally.setAttribute('class', 'overally-panel');
});

cloused.addEventListener('click', ()=>{
    (navegationMenu.classList.contains('visible')) ? navegationMenu.classList.remove('visible') : navegationMenu.classList.add('visible');
    overally.removeAttribute('class');
});

overally.addEventListener('click', () => {
    if(overally.getAttribute('class') == 'overally-panel') {
        (navegationMenu.classList.contains('visible')) ? navegationMenu.classList.remove('visible') : navegationMenu.classList.add('visible');
        overally.removeAttribute('class');
    }
});


const list__videoLearning = document.querySelectorAll('#list__video--learning li');
list__videoLearning.forEach(lisLink => {
    let link = lisLink.querySelector('.curso__link a');
    link.addEventListener('click', (event)=>{
        event.preventDefault();
        let iframe = document.querySelector('#video__frame--learning');
        iframe.setAttribute('src', link.getAttribute('href'));
    });
});