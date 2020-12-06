import { all, call, put, takeEvery } from 'redux-saga/effects';
import actions from './actions';
import * as UnsplashApi from '@services/unsplash';

export function* SEARCH({ payload }) {
  const response = yield call(UnsplashApi.searchImages, payload.keyword);
  console.log('here2', response);
  // yield put({
  //   type: actions.SET_DATA,
  //   payload,
  // });
}

export default function* rootSaga() {
  yield all([takeEvery(actions.SEARCH_IMAGE, SEARCH)]);
}
