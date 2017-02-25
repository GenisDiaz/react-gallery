// change page
export function changePage(page) {
  return {
    type: 'CHANGE_PAGE',
    page
  }
}

// change number of photos per page
export function changeNumberOfPhotos(number) {
  return {
    type: 'CHANGE_NUMBER_OF_PHOTOS',
    number
  }
}

// add photo
export function addPhoto(photoId, src, autor, description) {
  return {
    type: 'ADD_PHOTO',
    photoId,
    src,
    autor,
    description
  }
}
