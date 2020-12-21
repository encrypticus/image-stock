import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import sagaMiddleware from 'redux-saga';
import { sagas } from './sagas';
import { reducer } from './reducer';

const saga = sagaMiddleware();

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [saga, ...getDefaultMiddleware()],
});

saga.run(sagas);
