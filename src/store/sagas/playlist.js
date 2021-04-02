import { put } from "redux-saga/effects";

import { Creators as PlaylistActions } from "../ducks/playlist";
import { Creators as ErrorActions } from "../ducks/error";
import firebase from "firebase";

export function* getPlaylists() {
  const db = firebase.firestore();
  const playslists = [];
  try {
    yield db
      .collection("playlists")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          playslists.push(doc.data());
        });
      });

    yield put(PlaylistActions.getPlaylistSuccess(playslists));
  } catch (err) {
    yield put(ErrorActions.setError("Error ao obter playlist"));

    console.log(err);
  }
}
