
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
    <a href="${data.link}"> Get PDFs</a>
  </div>
  `
  document.querySelector('.body').appendChild(card)
}
