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


var card = document.querySelectorAll('.card')
var http = new XMLHttpRequest()
http.open('GET', 'syllabus.json', true);
http.send()
http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText)
    var i = 0;
    Object.keys(data, i).map(function (key) {
      console.log(data[i])
      console.log(key)
      console.log(data[i].name)
      addCard(data[i])
      i++;
    })
    console.log(data.length)
    // card.forEach(addCard(data))
  }
}




function addCard(data) {
  var card = document.createElement('section')
  card.classList.add('card')
  card.innerHTML = `
  <div class="card-header">
    <h3>${data.name}</h3>
  </div>
  <div class="card-body">
    <p>${data.mod1}</p>
    <p>${data.mod2}</p>
    <p>${data.mod3}</p>
    <p>${data.mod4}</p>
    <p>${data.mod5}</p>
  </div>
  <div class="btn">
    <a href="${data.link}" target="blank"> Get PDFs</a>
  </div>
  `
  document.querySelector('.body').appendChild(card)
}
