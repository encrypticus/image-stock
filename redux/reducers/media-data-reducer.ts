import { createSlice } from '@reduxjs/toolkit';
import { MediaType, ImageType, Lang, Orientation, Order } from 'types/enums';
import { IMediaDataState } from 'types/index';

const initialState: IMediaDataState = {
  mediaData: {
    total: '',
    totalHits: '',
    hits: [],
  },
  options: {
    safesearch: true,
    editors_choice: false,
    per_page: 40,
    colors: [],
    image_type: ImageType.ALL,
    lang: Lang.EN,
    orientation: Orientation.ALL,
    min_width: 0,
    min_height: 0,
    order: Order.POPULAR,
  },
  query: '',
  mediaType: MediaType.IMAGE,
};

const mediaReducer = createSlice({
  name: 'mediaData',
  initialState,
  reducers: {
    add(state, { payload: { hits, total, totalHits } }) {
      const {
        mediaData: { hits: currentHits },
      } = state;

      state.mediaData.total = total;
      state.mediaData.totalHits = totalHits;
      state.mediaData.hits = [...currentHits, ...hits];
    },
    clearMediaData(state) {
      state.mediaData.total = '';
      state.mediaData.totalHits = '';
      state.mediaData.hits = [];
      // state.options = {};
    },
    changeOptions(state, { payload }) {
      state.options = { ...state.options, ...payload };
    },
    changeMediaType(state, { payload }) {
      state.mediaType = payload;
    },
  },
});

export const {
  reducer: mediaDataReducer,
  actions: { add, clearMediaData, changeOptions, changeMediaType },
} = mediaReducer;
