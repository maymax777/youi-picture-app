import actions from './actions';

const initState = {
  images: [],
};

function unsplashReducer(state = initState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default unsplashReducer;
