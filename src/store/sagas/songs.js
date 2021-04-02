import { put } from "redux-saga/effects";

import { Creators as SongsActions } from "../ducks/songs";
import { Creators as ErrorActions } from "../ducks/error";
import firebase from "firebase";

export function* getSongs() {
  const db = firebase.firestore();
  const songs = [];
  try {
    yield db
      .collection("songs")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          songs.push(doc.data());
        });
      });

    yield put(SongsActions.getSongsSuccess(songs));
  } catch (err) {
    yield put(ErrorActions.setError("Error ao obter Songs"));
    console.log(err);
  }
}
