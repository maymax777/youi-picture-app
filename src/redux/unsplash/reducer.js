import actions from './actions';
import Unsplash, { toJson } from 'unsplash-js';

const initState = {
  images: [],
};

function unsplashReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload };
    case actions.SEARCH_IMAGE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default unsplashReducer;
