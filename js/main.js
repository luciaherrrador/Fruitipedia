'use strict';
//BÓRRAME O ACABARÁS ODIÁNDOME
window.addEventListener('load', () => {
  document.querySelector('#audio').play()
});

//Como he creado mi array de objetos fuera para mantener el código limpio estoy importando mi array en esta línea. sólo tengo que utilizarlo igual que siempre llamando a fruitis---> console.log(fruitis)
import fruitis from "./fruitis.js";


//ELEMENTOS QUE TIENES QUE CREAR PARA LA MAQUETACIÓN DE MANERA DINÁMICA
//const elementLi = document.createElement('li');
//const elementImg = document.createElement('img');
//const elementSpan = document.createElement('span');
//const elementButton = document.createElement('button');

console.log(fruitis);
console.log('🍍🍌🍓')

const fruitisList = document.querySelector('#fruitis-list');

/*const modalBoxOverlay = document.querySelector('#modal-box-overlay');
const modalBox = document.querySelector('#modal-box');*/

const createElements = () => {
  for (let i = 0; i < fruitis.length; i++) {
    const elementLi = document.createElement('li');
    const elementImg = document.createElement('img');
    const elementSpan = document.createElement('span');
    const elementButton = document.createElement('button');

    elementImg.src = fruitis[i].url;
    elementSpan.innerHTML = fruitis[i].name;
    elementButton.innerHTML = 'Más información';
    elementButton.setAttribute('type', 'button');
    elementButton.classList.add('button');

    fruitisList.appendChild(elementLi);
    elementLi.appendChild(elementImg);
    elementLi.appendChild(elementSpan);
    elementLi.appendChild(elementButton);
  }
}
createElements();

/*const moreInfo = () => {

  modalBoxOverlay.classList.add('hidden');
  displayModal();
}

const displayModal = () => {
  elementSpecie.innerHTML = fruitis[i].specie;
  elementStory.innnerHTML = fruitis[i].story;
  modalBoxOverlay.classList.remove('hidden');
}

elementButton.addEventListener('click', moreInfo);*/
