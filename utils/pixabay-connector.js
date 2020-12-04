/* eslint-disable no-console */

import { authenticate } from 'pixabay-api';

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
      perPage: {
        query: 'per_page',
      },
    };
  }

  searchImages = async ({ query, options } = { query: '', options: {} }) => {
    try {
      return await searchImages(query, options);
    } catch (e) {
      console.log(e.message);
    }
  };

  searchVideos = async ({ query, options } = { query: '', options: {} }) => {
    try {
      return await searchVideos(query, options);
    } catch (e) {
      console.log(e.message);
    }
  };
}

export const pixabayConnector = new PixabayConnector();
