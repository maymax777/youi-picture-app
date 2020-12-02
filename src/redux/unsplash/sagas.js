import { all, put, takeEvery } from 'redux-saga/effects';
import actions from './actions';

export function* SEARCH({ payload }) {
  yield put({
    type: actions.SET_STATE,
    payload,
  });
}

export default function* rootSaga() {
  yield all([takeEvery(actions.SEARCH_IMAGE, SEARCH)]);
}
