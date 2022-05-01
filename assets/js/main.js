const menu = document.getElementById('menu')

window.onscroll = function(){
    let top = window.pageYOffset || document.documentElement.scrollTop
    if( top > 48 ) {
        menu.classList.add('active')
    }else{
        menu.classList.remove('active')
    }
 }
