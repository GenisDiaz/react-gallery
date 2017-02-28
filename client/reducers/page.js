function page(state = [], action) {
  switch(action.type) {
    case 'CHANGE_PAGE':
      return {
        ...state,
        current_page: action.page + 1
      }
    case 'TOGGLE_LOADER':
    console.log('TOGGLE_LOADER',state, action);
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
