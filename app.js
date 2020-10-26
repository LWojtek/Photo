const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const links = nav.querySelectorAll('a');
const navbar = document.querySelector('.main-head')

burger.addEventListener('click', () => {


      nav.classList.toggle('nav-links-active')
      burger.classList.toggle('toggle')

})

links.forEach(link => {
      link.addEventListener('click', () => {
            nav.classList.toggle('nav-links-active')
            burger.classList.toggle('toggle')

      })
})