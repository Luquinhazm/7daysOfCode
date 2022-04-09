const menuBotao = document.getElementById ('btnMobile')

function toogleMenu(){
    const navMobile = document.getElementById('navMobile')
    navMobile.classList.toggle('active')
}

menuBotao.addEventListener('click', toogleMenu)