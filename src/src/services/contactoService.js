const STORAGE_KEY = 'urbanthreads_mensajes'

export const guardarMensaje = (datos) => {
  const mensajes = obtenerMensajes()
  const nuevoMensaje = {
    ...datos,
    id: Date.now(),
    fecha: new Date().toISOString(),
  }
  mensajes.push(nuevoMensaje)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(mensajes))
  console.log('Mensaje guardado:', nuevoMensaje)
  return nuevoMensaje
}

export const obtenerMensajes = () => {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}
