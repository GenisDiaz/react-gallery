function photos(state = [], action) {
  switch(action.type) {
    case 'ADD_PHOTOS':
      return [
        ...state,
        ...action.photos
      ];
    case 'ADD_PHOTO_INFO':
     const i = parseInt(action.index);
     return [
        ...state.slice(0,i),
        {...state[i], info: action.info},
        ...state.slice(i + 1)
      ];
    default:
      return state;
  }
  return state;
}

export default photos;
