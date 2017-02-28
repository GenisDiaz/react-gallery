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
    default:
      return state;
  }
  return state;
}

export default page;
