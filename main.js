import { getRandomImages } from './src/ramdon/getRandomImages.js'
import { searchImages } from './src/search/searchImages.js'
import { displayImages } from './src/display/displayImages.js'

const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')
const imageContainer = document.getElementById('imageContainer')
let page = 1
let perPage = 20

document.addEventListener('DOMContentLoaded', () => {
  getRandomImages(page, perPage).then((data) =>
    displayImages(data, imageContainer)
  )
})

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim()
  if (query !== '') {
    searchImages(query, page, perPage).then((data) =>
      displayImages(data, imageContainer)
    )
  } else {
    getRandomImages(page, perPage).then((data) =>
      displayImages(data, imageContainer)
    )
  }
})

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    const query = searchInput.value.trim()
    if (query !== '') {
      page++
      searchImages(query, page, perPage).then((data) =>
        displayImages(data, imageContainer)
      )
    } else {
      page++
      getRandomImages(page, perPage).then((data) =>
        displayImages(data, imageContainer)
      )
    }
  }
})
