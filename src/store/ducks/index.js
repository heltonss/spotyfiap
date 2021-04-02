import { combineReducers } from "redux";
import playlists from "./playlist";
import playlistDetails from "./playlistDetails";
import error from "./error";
import player from "./player";
import songs from "./songs";

const reducers = combineReducers({
  playlists,
  playlistDetails,
  error,
  player,
  songs,
});

export default reducers;
