export function displayImages(images, imageContainer) {
  images.forEach((image) => {
    const imgLink = document.createElement('a')
    imgLink.href = image.links.html
    imgLink.target = '_blank'
    const imgElement = document.createElement('img')
    imgElement.src = image.urls.regular
    imgElement.alt = image.alt_description
    imgLink.appendChild(imgElement)
    imageContainer.appendChild(imgLink)
  })
}
