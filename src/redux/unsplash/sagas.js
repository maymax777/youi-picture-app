import { all, call, put, takeEvery } from 'redux-saga/effects';
import actions from './actions';
import * as UnsplashApi from '@services/unsplash';

export function* searchImage({ payload }) {
  yield put({
    type: actions.SEARCH_IMAGE,
    payload: { ...payload, loading: true },
  });
}

export function* search({ payload }) {
  const images = yield call(UnsplashApi.searchImages, payload.keyword);
  yield put({
    type: actions.SET_DATA,
    payload: { ...payload, loading: false, images: images },
  });
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.SEARCH_IMAGE, search),
    takeEvery(actions.SET_KEYWORD, searchImage),
  ]);
}
