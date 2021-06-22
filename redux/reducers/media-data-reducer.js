import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mediaData: {
    total: '',
    totalHits: '',
    hits: [],
  },
  options: {
    safesearch: true,
    editors_choice: false,
    per_page: 40,
  },
  query: '',
  mediaType: 'image',
};

const mediaReducer = createSlice({
  name: 'mediaData',
  initialState,
  reducers: {
    add(state, { payload: { hits, total, totalHits } }) {
      const { mediaData: { hits: currentHits } } = state;

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
  actions: {
    add,
    clearMediaData,
    changeOptions,
    changeMediaType
  }
} = mediaReducer;