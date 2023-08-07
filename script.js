const openBtn= document.getElementById('menu-icon')
const closeBtn = document.getElementById('closeBtn')
const menu = document.getElementById('menu')

openBtn.onclick = function() {
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
    }
}

closeBtn.onclick = function() {
    if(!menu.classList.contains('hidden')){
        menu.classList.add('hidden')
    }

}