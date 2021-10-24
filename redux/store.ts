import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import sagaMiddleware from 'redux-saga';
import { reducer } from './reducer';
import { sagas } from './sagas';

const saga = sagaMiddleware();

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [saga, ...getDefaultMiddleware()],
});

export type RootState = ReturnType<typeof store.getState>;

saga.run(sagas);
