class EventBrite {
  constructor () {
    this.token_auth = 'JAYTK5NFZ5SEWVDHDHPN'
    this.ordenar = 'date'
  }

  // obtiene las categorias en init
  async obtenerCategorias () {
    // consultar las categorias ala REST API de event brite
    const respuestaCategoria = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`)

    // esperamos de la respuesta de las categorias y devolvemos un json
    const categorias = await respuestaCategoria.json()

    return categorias
  } // fin de obtenerCategorias

  async mostrarEventos (evento, categoria) {
    const respuestaEvento = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.token_auth}`)

    const eventos = await respuestaEvento.json()

    return eventos
  } // fin de obtenerEventos
} // fin de la clase EventBrite
