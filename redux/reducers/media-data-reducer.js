import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mediaData: {
    total: '',
    totalHits: '',
    hits: [],
  },
  pageNumber: 1,
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
    getNextPage(state, action) {
       state.pageNumber < 24 && state.pageNumber++;
    },
  },
});

export const { reducer: mediaDataReducer, actions: { add, getNextPage } } = imagesReducer;