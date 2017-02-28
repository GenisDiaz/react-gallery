import { getInitPhotos } from '../rest-api/photo';

// toggleLoader
export function toggleLoader() {
  return {
    type: 'TOGGLE_LOADER'
  }
}

// change page
export function changePage(page) {
  return {
    type: 'CHANGE_PAGE',
    page
  }
}

// next page
export function nextPage(page) {
  return (dispatch) => {
    dispatch(toggleLoader());
    dispatch(changePage(page));
    dispatch(loadPhotos()).then(
      x => dispatch(toggleLoader())
    );
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
    dispatch(loadPhotos()).then(
      x => dispatch(toggleLoader())
    );
  }
}
