import { all, takeLatest } from 'redux-saga/effects';
import { Types as AbumsTypes } from '../ducks/albums';
import { getAlbums } from './albums';

export default function* rootSaga() {
  return yield all([
    takeLatest(AbumsTypes.GET_REQUEST, getAlbums)
  ]);
}
