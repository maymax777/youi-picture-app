import { all, call, put, takeEvery } from 'redux-saga/effects';
import actions from './actions';
import * as UnsplashApi from '@services/unsplash';

export function* SEARCH({ payload }) {
  const images = yield call(UnsplashApi.searchImages, payload.keyword);
  yield put({
    type: actions.SET_DATA,
    payload: images,
  });
}

export default function* rootSaga() {
  yield all([takeEvery(actions.SEARCH_IMAGE, SEARCH)]);
}
