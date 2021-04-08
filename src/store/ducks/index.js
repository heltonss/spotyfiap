import { combineReducers } from "redux";
import playlists from "./playlist";
import playlistDetails from "./playlistDetails";
import error from "./error";
import player from "./player";
import songs from "./songs";
import login from "./login";

const reducers = combineReducers({
  playlists,
  playlistDetails,
  error,
  player,
  songs,
  login,
});

export default reducers;
