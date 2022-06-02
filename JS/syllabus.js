var syllabus = document.getElementById('#nav');

var card = document.querySelectorAll('.card')
var http = new XMLHttpRequest()
http.open('GET', 'syllabus.json', true);
http.send()
http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText)
    var i = 0;
    // syllabus.append(addSyllabus())
    console.log(data)
    Object.keys(data, i).map(function (key) {
      addCard(data[i])
      i++;
    })
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

function addSyllabus() {
  var syllabus = `<div class="btn">
  <a href="../ECE Sem 6 Syllabus.pdf"> Syllabus Copy</a>
</div>`
  return syllabus;
  // document.querySelector('.body').appendChild(syllabus)
}