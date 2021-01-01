import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mediaData: {
    total: '',
    totalHits: '',
    hits: [],
  },
  options: {},
  query: '',
  mediaType: 'image',
};

const imagesReducer = createSlice({
  name: 'mediaData',
  initialState,
  reducers: {
    add(state, { payload: { hits, total, totalHits } }) {
      const { mediaData: { hits: currentHits } } = state;

      state.mediaData.total = total;
      state.mediaData.totalHits = totalHits;
      state.mediaData.hits = [...currentHits, ...hits];
    },
    resetState(state) {
      state.mediaData.total = '';
      state.mediaData.totalHits = '';
      state.mediaData.hits = [];
      state.options = {};
    },
    changeOptions(state, { payload }) {
      state.options = { ...state.options, ...payload };
    },
  },
});

export const { reducer: mediaDataReducer, actions: { add, resetState, changeOptions } } = imagesReducer;