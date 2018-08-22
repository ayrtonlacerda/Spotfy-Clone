import api from '../../services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as AlbumsActions } from '../ducks/albums';

export function* getAlbums() {
  try {
    const response = yield call(api.get, '/songs');

    yield put(AlbumsActions.getAlbumSuccess(response.data));
    console.log.tron(response.data);
    console.log.tron('response.data');
  } catch (err) {
    yield put(AlbumsActions.getAlbumFailure('Erro ao busca dadaos na api'));
  }
}
