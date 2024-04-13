export async function getRandomImages(page, perPage) {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?count=${perPage}&client_id=MVKwbul345zYqwXUH2Uc_8Zwd5vQ5RiYB7RlB4fxGEk`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching random images:', error)
    return []
  }
}
