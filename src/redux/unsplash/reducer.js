import actions from './actions';
import Unsplash, { toJson } from 'unsplash-js';
import { UNSPLASH_API_KEY, API_TIME_LIMIT } from '@utils/config';

const initState = {
  images: [],
};

const searchImages = (keyword) => {
  const unsplashApi = new Unsplash({
    accessKey: UNSPLASH_API_KEY,
    timeout: API_TIME_LIMIT,
  });

  return (dispatch) =>
    unsplashApi.search
      .photos(keyword, 1, 10)
      .then(toJson)
      .then((json) => {
        return dispatch({
          type: actions.SEARCH_IMAGE,
          payload: json.results,
        });
      });
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
export { searchImages };
