function toggleMode() {
  const html = document.documentElement
    html.classList.toggle('light')

// pegar a tag img
  const img = document.querySelector("#profile img")
// substituir imagem
  if(html.classList.contains('light')) {

     img.setAttribute('src', '/assets/eulight.jpg')
  } else{
  img.setAttribute('src', '/assets/eu.jpg')

  }
}