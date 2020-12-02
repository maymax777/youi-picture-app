import Unsplash from 'unsplash-js';

const unsplashApi = new Unsplash({
  accessKey: UNSPLASH_API_KEY,
  timeout: API_TIME_LIMIT,
});

export default unsplashApi;
