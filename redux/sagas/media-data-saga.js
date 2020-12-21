import { take, put, call, all, actionChannel } from 'redux-saga/effects';
import { getMediaDataAsync } from '../actions/media-data-actions';
import { add as addMediaData } from '../reducers/media-data-reducer';
import { pixabayConnector } from '../../utils/pixabay-connector';

function* getMediaDataRequest(options) {
  const mediaData = yield call(pixabayConnector.searchMedia, options);
  yield put(addMediaData(mediaData));
}

function* watchGetMediaDataRequest() {
  const requestChannel = yield actionChannel(getMediaDataAsync.type);

  while (true) {
    const { payload: options } = yield take(requestChannel);
    yield call(getMediaDataRequest, options);
  }
}

export function* watchMediaData() {
  yield all([call(watchGetMediaDataRequest)]);
}
