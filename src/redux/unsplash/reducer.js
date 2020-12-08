import actions from './actions';

const initState = {
  images: [],
  keyword: '',
  loading: false,
};

function unsplashReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_DATA:
    case actions.SEARCH_IMAGE:
    case actions.SET_KEYWORD:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default unsplashReducer;
