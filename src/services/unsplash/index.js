import { UNSPLASH_API_KEY } from '@utils/config';

export const searchImages = async (keyword) => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.unsplash.com/search/photos?query=${keyword}`, {
      method: 'GET',
      headers: {
        Authorization: `Client-ID ${UNSPLASH_API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        const images = json.results.map((result) => result.urls.thumb);
        resolve(images);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
