import { put } from "redux-saga/effects";

import { Creators as PlaylistActions } from "../ducks/playlist";
import { Creators as ErrorActions } from "../ducks/error";
import firebase from "firebase";

export function* getPlaylists() {
  const db = firebase.firestore();
  const data = [];
  try {
    yield db
      .collection("playlists")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, playlist: doc.data() });
        });
      });
    yield put(PlaylistActions.getPlaylistSuccess(data));
  } catch (err) {
    yield put(ErrorActions.setError("Error ao obter playlist"));

    console.log(err);
  }
}

export function* savePlaylist(action) {
  const db = firebase.firestore();

  try {
    yield db
      .collection("playlists")
      .add(action.payload)
      .then((docRef) => {});

    yield put(PlaylistActions.getPlaylistRequest());
  } catch (err) {
    yield put(ErrorActions.setError("Error ao obter playlist"));

    console.log(err);
  }
}

export function* updatePlaylist(action) {
  const db = firebase.firestore();
  console.log(action);
  try {
    const playlist = db.collection("playlists").doc(action.payload.id);

    yield playlist.update(action.payload.body).then(() => {});

    yield put(PlaylistActions.getPlaylistRequest());
  } catch (err) {
    yield put(ErrorActions.setError("Error ao obter playlist"));

    console.log(err);
  }
}
