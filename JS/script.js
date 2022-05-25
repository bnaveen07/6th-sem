window.addEventListener('resize', function () {
  addRequiredClass();
})


function addRequiredClass() {
  if (window.innerWidth < 860) {
    document.body.classList.add('mobile')
    document.querySelector('nav').classList.remove('transparent-bg')

  } else {
    document.body.classList.remove('mobile')
    document.querySelector('nav').classList.add('transparent-bg')
  }
}

window.onload = addRequiredClass

var hamburger = document.querySelector('.hamburger')
var mobileNav = document.querySelector('.nav-list')

var bars = document.querySelectorAll('.hamburger span')
var nav = document.querySelector('nav')

var isActive = false

hamburger.addEventListener('click', function () {
  mobileNav.classList.toggle('open')
  if (!isActive) {
    nav.style.backgroundColor = '#62466b'
    nav.style.backdropFilter = 'blur(0px)'
    nav.style.height = '100vh'
    bars[0].style.transform = 'rotate(45deg)'
    bars[1].style.opacity = '0'
    bars[2].style.transform = 'rotate(-45deg)'
    isActive = true
  } else {
    nav.style.backgroundColor = 'transparent'
    nav.style.backdropFilter = 'blur(10px)'
    nav.style.height = 'auto'
    bars[0].style.transform = 'rotate(0deg)'
    bars[1].style.opacity = '1'
    bars[2].style.transform = 'rotate(0deg)'
    isActive = false
  }
})
