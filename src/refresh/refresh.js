export function refrescarPagina() {
  const titulo = document.getElementById('titulo')

  titulo.addEventListener('click', function () {
    location.reload()
  })
}
