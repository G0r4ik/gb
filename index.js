const tabHeaders = document.querySelectorAll('.tab-header')
const tabContent = document.querySelectorAll('.tab-content')

function openTab(event, tabName) {
  for (let i = 0; i < tabHeaders.length; i++) {
    tabHeaders[i].classList.remove('tab-header_active')
  }

  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none'
  }

  document.getElementById(tabName).style.display = 'block'
  event.currentTarget.classList.add('tab-header_active')
}

const burgerMenu = document.querySelector('#burgerMenu')
const sidebar = document.querySelector('.m-sidebar')

burgerMenu.addEventListener('click', () => {
  sidebar.classList.toggle('m-sidebar_open')
})
