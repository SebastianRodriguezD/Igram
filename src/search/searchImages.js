export async function searchImages(query, page, perPage) {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&per_page=${perPage}&page=${page}&client_id=MVKwbul345zYqwXUH2Uc_8Zwd5vQ5RiYB7RlB4fxGEk`
    )
    const data = await response.json()
    if (data.results.length === 0) {
      mostrarMensaje('No se encontraron imágenes para ' + query)
    }
    return data.results
  } catch (error) {
    console.error('Error fetching images for query:', error)
    return []
  }
}

function mostrarMensaje(mensaje) {
  alert(mensaje)
}
