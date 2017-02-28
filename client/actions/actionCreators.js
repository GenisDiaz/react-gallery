import { getInitPhotos } from '../rest-api/photo';

// change page
export function changePage(page) {
  return {
    type: 'CHANGE_PAGE',
    page
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
