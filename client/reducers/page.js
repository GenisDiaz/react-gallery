function page(state = [], action) {
  switch(action.type) {
    case 'CHANGE_PAGE':
      return {
        ...state,
        current_page: action.page + 1
      }
    case 'TOGGLE_LOADER':
      return {
        ...state,
        loading: !state.loading
      }
    case 'THROW_ERROR':
     return {
       ...state,
       error: true,
       text: action.text
     }
    default:
      return state;
  }
  return state;
}

export default page;
