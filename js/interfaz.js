class Interfaz {
  constructor () {
    this.init()
    // leer el resutado
    this.listado = document.getElementById('resultado-eventos')
  }

  init () {
    this.imprimirCategorias()
  }

  // imprimir categorias
  imprimirCategorias () {
    const listaCategorias = eventbrite.obtenerCategorias()
      .then(categorias => {
        const cats = categorias.categories
        const categoriasFragment = document.createDocumentFragment()
        const htmlCategorias = document.getElementById('categoria')

        cats.forEach(cat => {
          const option = document.createElement('option')
          option.value = cat.id
          option.textContent = cat.name
          categoriasFragment.appendChild(option)
        })
        htmlCategorias.appendChild(categoriasFragment)
      })
  } // fin de imprimirCategorias

  mostrarMensaje (mensaje, clases) {
    const div = document.createElement('div')
    div.classList = clases
    div.textContent = mensaje

    const main = document.querySelector('.bloque-buscar')
    main.appendChild(div)

    window.setTimeout(() => {
      document.querySelector('.bloque-buscar > div').remove()
    }, 3000)
  } // fin de mostrarMensaje

  mostrarEventos (evento) {
    evento.forEach((event) => {
      this.listado.innerHTML += `
        <div class="col-md-4 mb-4 mt-5">
          <div class="card">
            <img src="${event.logo !== null ? event.logo.url : ''}" class="" alt="">
            <div class="card-body">
              <div class="card-text">
                <h2 class="text-center">${event.name.text}</h2>
                <p class="lead text-info">Información del evento</p>
                <p>${event.description.text.substring(0, 280)}...</p>
                <span class="badge badge-primary">Capacidad: ${event.capacity}</span>
                <span class="badge badge-primary">Fecha y Hora: ${event.start.local}</span>

                <a href="${event.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar Boletos</a>
              </div>
            </div>
          </div>
        </div>
      `
    })
  } // fin de mostrarEventos

  // limpiar resultados
  limpiarResultados () {
    this.listado.innerHTML = ''
  } // fin de limpiarResultados

} // fin de la clase Interfaz
