import { put } from "redux-saga/effects";

import { Creators as SongsActions } from "../ducks/songs";
import { Creators as ErrorActions } from "../ducks/error";
import firebase from "firebase";
const songsAdd = [
  {
    id: 0,
    title: "Papercut",
    author: "Linkin Park",
    album: "Hybrid Theory",
    file: "https://s3-sa-east-1.amazonaws.com/gonative/1.mp3",
    thumbnail: "https://s3-sa-east-1.amazonaws.com/gonative/linkin_park.jpg",
    playlistId: 1,
  },
  {
    id: 1,
    title: "One Step Closer",
    author: "Linkin Park",
    album: "Hybrid Theory",
    file: "https://s3-sa-east-1.amazonaws.com/gonative/2.mp3",
    thumbnail: "https://s3-sa-east-1.amazonaws.com/gonative/linkin_park.jpg",
    playlistId: 2,
  },
  {
    id: 2,
    title: "With You",
    author: "Linkin Park",
    album: "Hybrid Theory",
    file: "https://s3-sa-east-1.amazonaws.com/gonative/3.mp3",
    thumbnail: "https://s3-sa-east-1.amazonaws.com/gonative/linkin_park.jpg",
    playlistId: 3,
  },
  {
    id: 3,
    title: "Points of Authority",
    author: "Linkin Park",
    album: "Hybrid Theory",
    file: "https://s3-sa-east-1.amazonaws.com/gonative/4.mp3",
    thumbnail: "https://s3-sa-east-1.amazonaws.com/gonative/linkin_park.jpg",
    playlistId: 4,
  },
  {
    id: 4,
    title: "Crawling",
    author: "Linkin Park",
    album: "Hybrid Theory",
    file: "https://s3-sa-east-1.amazonaws.com/gonative/5.mp3",
    thumbnail: "https://s3-sa-east-1.amazonaws.com/gonative/linkin_park.jpg",
    playlistId: 4,
  },
];

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
