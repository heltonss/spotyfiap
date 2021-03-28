import { all, takeLatest } from 'redux-saga/effects';
import { Types as PlaylistsTypes } from '../ducks/playlist';
import { Types as PlaylistDetailsTypes } from '../ducks/playlistDetails';
import { getPlaylists } from './playlist';
import { getPlaylistDetails } from './playlistDetails';

export default function* rootSaga() {
  yield all([takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists)]);
  yield all([takeLatest(PlaylistDetailsTypes.GET_REQUEST, getPlaylistDetails)]);
}
