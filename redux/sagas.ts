import { all, call } from 'redux-saga/effects';

import { watchMediaData } from './sagas/media-data-saga';

export function* sagas() {
  yield all([call(watchMediaData)]);
}
