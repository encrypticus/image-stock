/* eslint-disable no-console */
import { authenticate } from '../utils/pixabay';

import { API_KEY } from '../constants/api-keys/pixabay-key';

const { searchImages, searchVideos } = authenticate(API_KEY);

export default class PixabayConnector {
  static get searchSettings() {
    return {
      lang: {
        query: 'lang',
        en: 'en',
        ru: 'ru',
      },
      id: {
        query: 'id',
      },
      imageType: {
        query: 'image_type',
        all: 'all',
        photo: 'photo',
        illustration: 'illustration',
        vector: 'vector',
      },
      videoType: {
        query: 'video_type',
        all: 'all',
        film: 'film',
        animation: 'animation',
      },
      orientation: {
        query: 'orientation',
        horizontal: 'horizontal',
        vertical: 'vertical',
      },
      category: {
        query: 'category',
        backgrounds: 'backgrounds',
        fashion: 'fashion',
        nature: 'nature',
        science: 'science',
        education: 'education',
        feelings: 'feelings',
        health: 'health',
        people: 'people',
        religion: 'religion',
        places: 'places',
        animals: 'animals',
        industry: 'industry',
        computer: 'computer',
        food: 'food',
        sports: 'sports',
        transportation: 'transportation',
        travel: 'travel',
        buildings: 'buildings',
        business: 'business',
        music: 'music',
      },
      minWidth: {
        query: 'min_width',
      },
      minHeight: {
        query: 'min_height',
      },
      colors: {
        query: 'colors',
        grayscale: 'grayscale',
        transparent: 'transparent',
        red: 'red',
        orange: 'orange',
        yellow: 'yellow',
        green: 'green',
        turquoise: 'turquoise',
        blue: 'blue',
        lilac: 'lilac',
        pink: 'pink',
        white: 'white',
        gray: 'gray',
        black: 'black',
        brown: 'brown',
      },
      page: {
        query: 'page',
      },
      perPage: {
        query: 'per_page',
      },
    };
  }

  searchMedia = async ({ query, options, mediaType } = { query: '', options: {}, mediaType: 'image' }) => {
    try {
      switch (mediaType) {
        case 'image': {
          return await searchImages(query, options);
        }
        case 'video': {
          return await searchVideos(query, options);
        }
        default: {
          return await searchImages(query, options);
        }
      }
    } catch (e) {
      console.log(e.message);
    }
  };
}

export const pixabayConnector = new PixabayConnector();
