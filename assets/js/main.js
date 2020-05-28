let $btnMenu = document.querySelector('#btn-menu')
let $menu = document.querySelector('#menu')
let $overlay = document.querySelector('#overlay')

function changeClass(element, clase) {
    element.classList.toggle(`${clase}`)
}

$btnMenu.addEventListener('click', () => {
    changeClass($overlay, 'ocultar')
    changeClass($menu, 'ocultar')
    changeClass($btnMenu, 'cambiar-bg')
})

$overlay.addEventListener('click', () => {
    changeClass($overlay, 'ocultar')
    changeClass($menu, 'ocultar')
    changeClass($btnMenu, 'cambiar-bg')
})