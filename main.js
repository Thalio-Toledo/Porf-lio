window.addEventListener('scroll', onScroll)

function onScroll() {
  var card = document.querySelector('#card')

  if (scrollY > 100) {
    card.classList.add('fix')
  } else {
    card.classList.remove('fix')
  }
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#sobre, #card, .dados, .cards, .Linguagens-de-programação,
.tecnologias, .projetos, .Cursos
`)
