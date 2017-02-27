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
      .then(photo => dispatch(addPhoto(photo)));
  };
}

export function addPhoto(photo) {
  console.log('addPhoto', photo)
  return {
    type: 'ADD_PHOTO',
    photo
  }
}

// init App
export function initApp() {
  return (dispatch) => {
    dispatch(loadPhotos());
  }
}
