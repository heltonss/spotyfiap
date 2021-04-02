import { all, takeLatest } from "redux-saga/effects";
import { Types as PlaylistsTypes } from "../ducks/playlist";
import { Types as PlaylistDetailsTypes } from "../ducks/playlistDetails";
import { Types as SongsTypes } from "../ducks/songs";
import { getPlaylists, savePlaylist, updatePlaylist } from "./playlist";
import { getPlaylistDetails } from "./playlistDetails";
import { getSongs } from "./songs";

export default function* rootSaga() {
  yield all([takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists)]);
  yield all([takeLatest(PlaylistsTypes.SAVE_PLAYLIST, savePlaylist)]);
  yield all([takeLatest(PlaylistsTypes.UPDATE_PLAYLIST, updatePlaylist)]);
  yield all([takeLatest(PlaylistDetailsTypes.GET_REQUEST, getPlaylistDetails)]);
  yield all([takeLatest(SongsTypes.GET_REQUEST, getSongs)]);
}
