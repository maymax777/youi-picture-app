// import { toJson, createApi } from 'unsplash-js';
import { UNSPLASH_API_KEY, API_TIME_LIMIT } from '@utils/config';

// const unsplashApi = createApi({
//   accessKey: UNSPLASH_API_KEY,
//   timeout: API_TIME_LIMIT,
// });

export const searchImages = async (keyword) => {
  // return unsplashApi.search
  //   .photos(keyword, 1, 10)
  //   .then(toJson)
  //   .then((json) => json.result)
  //   .catch((error) => error);
  return 'error test';
};

// export default unsplashApi;
