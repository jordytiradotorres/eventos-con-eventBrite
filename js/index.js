const eventbrite = new EventBrite()
const ui = new Interfaz()

const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', e => {
  e.preventDefault()

  const busqueda = document.getElementById('busqueda').value
  const categoria = document.getElementById('categoria')
  const categoriaSeleccionada = categoria.options[categoria.selectedIndex].value

  if (busqueda !== '') {
    eventbrite.mostrarEventos(busqueda, categoriaSeleccionada)
      .then(data => {
        if (data.events.length > 0) {
          ui.limpiarResultados()
          ui.mostrarEventos(data.events)
        } else {
          ui.mostrarMensaje('No hay resultados', 'alert alert-danger text-center')
        }
      })
  } else {
    ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger text-center')
  }
})
