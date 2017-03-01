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
          dispatch(addPhotos(photos.photo));
          dispatch(addPagesNumber(photos.pages));
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

export function addPagesNumber(pagesNumber) {
  return {
    type: 'ADD_PAGES_NUM',
    pagesNumber
  }
}

// get photo info
export function getPhotoInfo(photoId, index) {
  return (dispatch) => {
    return getPhotoInfoApi(photoId)
      .then(info => dispatch(addPhotoInfo(index, info)));
  };
}

export function addPhotoInfo(index, info) {
  return {
    type: 'ADD_PHOTO_INFO',
    index,
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
