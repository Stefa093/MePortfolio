//-----------------show Menu
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-tgl'),
    closeMenu = document.getElementById('nav-close')

toggleMenu.addEventListener('click', ()=> {
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', ()=> {
    navMenu.classList.remove('show')
})

//-----------------Clik Link

const navLink = document.querySelectorAll('.nlink')

function linkAction() { 
    navMenu.classList.remove('show')
}