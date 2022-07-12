window.addEventListener('scroll', onScroll)

function onScroll() {
  var card = document.querySelector('#card')

  if (scrollY > 100) {
    card.classList.add('fix')
  } else {
    card.classList.remove('fix')
  }
}
