const contFav = document.querySelector('#containerFav');

import arrayFav from './gifos.js';

arrayFav.forEach(element => {
    const favo = document.createElement('div');
    favo.innerHTML=`<img src= ${element}/>`;
    contFav.appendChild(favo)
});

