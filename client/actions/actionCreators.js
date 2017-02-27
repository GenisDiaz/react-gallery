import { getInitPhotos } from '../rest-api/photo';

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

// add photo and init
export function loadPhotos () {
  return (dispatch) => {
    return getInitPhotos()
      .then(photos => dispatch(addPhotos(photos)));
  };
}

export function addPhotos(photos) {
  console.log('addPhoto', photos)
  return {
    type: 'ADD_PHOTOS',
    photos
  }
}

// init App
export function initApp() {
  return (dispatch) => {
    dispatch(loadPhotos());
  }
}
