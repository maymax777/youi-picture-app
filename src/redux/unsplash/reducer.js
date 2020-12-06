import actions from './actions';

const initState = {
  images: [],
  keyword: '',
};

function unsplashReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_DATA:
      return { ...state, ...action.payload };
    case actions.SEARCH_IMAGE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default unsplashReducer;
