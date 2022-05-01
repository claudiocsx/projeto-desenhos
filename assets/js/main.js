const menu = document.getElementById('menu')

window.onscroll = function(){
    let top = window.pageYOffset || document.documentElement.scrollTop
    if( top > 48 ) {
        menu.classList.add('active')
    }else{
        menu.classList.remove('active')
    }
}

showMenu = (toogleId, navId) => {
    const toggle = menuToggle = document.getElementById(toogleId)
          navMenu = document.getElementById(navId)

          if(toggle && nav){
              toggle.addEventListener('click',()=>{
                  nav.classList.toggle('active__menu')
              })
          }     
 }
    
showMenu('menu__toggle','nav')    

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    
    // Remove menu mobile
    const navMenu = document.getElementById('nav')
    navMenu.classList.remove('active__menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))