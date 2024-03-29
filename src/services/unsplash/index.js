import {
  UNSPLASH_API_KEY,
  UNSPLASH_API_ENDPOINT,
  IMAGE_PER_PAGE,
} from '@utils/config';

export const searchImages = async (keyword) => {
  return new Promise((resolve, reject) => {
    fetch(
      `${UNSPLASH_API_ENDPOINT}/photos?query=${keyword}&per_page=${IMAGE_PER_PAGE}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Client-ID ${UNSPLASH_API_KEY}`,
        },
      },
    )
      .then((res) => res.json())
      .then((json) => {
        const images = json.results.map((result) => ({
          image: result.urls.thumb,
          title: result.alt_description,
        }));
        resolve(images);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
