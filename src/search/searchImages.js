export async function searchImages(query, page, perPage) {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&per_page=${perPage}&page=${page}&client_id=MVKwbul345zYqwXUH2Uc_8Zwd5vQ5RiYB7RlB4fxGEk`
    )
    const data = await response.json()
    return data.results
  } catch (error) {
    console.error('Error fetching images for query:', error)
    return []
  }
}
