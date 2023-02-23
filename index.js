const clickOpen = document.getElementById('click-open')
const clickClose = document.getElementById('click_close')
const sideBar = document.getElementById('sidebar')

clickOpen.addEventListener('click', ()=> {
   sideBar.style.right = '0'
})

clickClose.addEventListener('click', ()=> {
    sideBar.style.right = '-200px'
})
