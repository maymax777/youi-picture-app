import { all } from 'redux-saga/effects';
import unsplash from './unsplash/sagas';

function* rootSaga() {
  yield all([unsplash()]);
}

export default rootSaga;
