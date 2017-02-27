function photos(state = [], action) {
  switch(action.type) {
    case 'ADD_PHOTOS':
      return [
        ...state,
        ...action.photos
      ];
    default:
      return state;
  }
  return state;
}

export default photos;
