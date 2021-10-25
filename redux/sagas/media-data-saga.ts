import { take, put, call, all, actionChannel, SagaReturnType } from 'redux-saga/effects';
import { IMediaDataState } from 'types/index';
import { pixabayConnector } from 'utils/pixabay-connector';
import { getMediaDataAsync } from '../actions/media-data-actions';
import { add as addMediaData } from '../reducers/media-data-reducer';

function* getMediaDataRequest(options: Omit<IMediaDataState, 'mediaData'>): Generator {
  const mediaData = yield call(pixabayConnector.searchMedia, options);
  yield put(addMediaData(mediaData));
}

function* watchGetMediaDataRequest() {
  const requestChannel: SagaReturnType<typeof getMediaDataAsync> = yield actionChannel(
    getMediaDataAsync.type,
  );

  while (true) {
    // @ts-ignore
    const { payload: options } = yield take(requestChannel);
    console.log(options);
    yield call(getMediaDataRequest, options);
  }
}

export function* watchMediaData() {
  yield all([call(watchGetMediaDataRequest)]);
}
