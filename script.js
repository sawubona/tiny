"use strict"

const openMenu = () => {
    let navBlock = document.querySelector('.yellow-block__nav');
    if(navBlock.classList.contains('tablet__nav')){
        navBlock.classList.remove('tablet__nav');
    } else {
        navBlock.classList.add('tablet__nav');
    }
}

const clickHandler = () => {
    let target = event.target;
    let button = target.closest('#hamburger');
    if (!button) return;
    else {
        openMenu();
    }
}

document.addEventListener('click', clickHandler);