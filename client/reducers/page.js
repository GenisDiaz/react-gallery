function page(state = [], action) {
  switch(action.type) {
    case 'CHANGE_PAGE':
      return {
        ...state,
        current_page: action.page + 1
      }
    default:
      return state;
  }
  return state;
}

export default page;
