import { put } from "redux-saga/effects";
import firebase from "firebase";

import { Creators as PlaylistDetailsActions } from "../ducks/playlistDetails";
import { Creators as ErrorActions } from "../ducks/error";

export function* getPlaylistDetails(action) {
  try {
    const db = firebase.firestore();
    const docRef = db.collection("playlists").doc(action.payload.id);
    let data = {};
    yield docRef.get().then((doc) => {
      if (doc.exists) {
        data = doc.data();
      }
    });
    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(data));
  } catch (err) {
    console.log({ err });
    yield put(ErrorActions.setError("Error ao obter detalhe da playlist !"));
  }
}
