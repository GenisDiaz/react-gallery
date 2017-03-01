import { getInitPhotosApi, getPhotoInfoApi } from '../rest-api/photo';

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
    return getInitPhotosApi()
      //.then(photos => dispatch(addPhotos(photos)));
      .then(photos => {
        if (photos.code === 2) {
          dispatch(throwError(photos.text));
        } else {
          dispatch(addPhotos(photos));
        }
      });
  };
}

export function throwError(text) {
  return {
    type: 'THROW_ERROR',
    text
  }
} 

export function addPhotos(photos) {
  return {
    type: 'ADD_PHOTOS',
    photos
  }
}

// get photo info
export function getPhotoInfo(idPhoto) {
  return (dispatch) => {
    return getPhotoInfoApi(idPhoto)
      .then(info => dispatch(addPhotoInfo(info)));
  };
}

export function addPhotoInfo(info) {
  return {
    type: 'ADD_PHOTO_INFO',
    info
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
