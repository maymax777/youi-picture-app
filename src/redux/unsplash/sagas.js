import { all, call, put, takeEvery } from 'redux-saga/effects';
import actions from './actions';
import { searchImages } from '@services/unsplash';

export function* SEARCH(payload) {
  console.log('here', payload);
  // const {keyword} = payload;
  // const response = yield call(unsplashApi.searchImages, keyword);
  // console.log("here", response)
  yield put({
    type: actions.SEARCH_IMAGE,
    payload,
  });
}

export default function* rootSaga() {
  yield all([takeEvery(actions.SEARCH_IMAGE, SEARCH)]);
}
