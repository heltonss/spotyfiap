export const Types = {
  GET_REQUEST: "playlists/GET_REQUEST",
  GET_REQUEST_ID: "playlists/GET_REQUEST_ID",
  GET_SUCCESS: "playlists/GET_SUCCESS",
  SAVE_PLAYLIST: "playlists/SAVE_PLAYLIST",
  UPDATE_PLAYLIST: "playlists/UPDATE_PLAYLIST",
  DELETE_PLAYLIST: "playlists/DELETE_PLAYLIST",
  DELETE_PLAYLIST_SUCCESS: "playlists/DELETE_PLAYLIST_SUCCESS",
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  newPlaylist: {},
  success: false,
};

export default function Playlist(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true, success: false };
    case Types.GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case Types.SAVE_PLAYLIST:
      return {
        ...state,
        loading: false,
        newPlaylist: action.payload.newPlaylist,
      };
    case Types.UPDATE_PLAYLIST:
      return {
        ...state,
        loading: false,
        body: action.payload.body,
        id: action.payload.id,
      };
    case Types.DELETE_PLAYLIST:
      return {
        ...state,
        loading: true,
      };
    case Types.DELETE_PLAYLIST_SUCCESS:
      return {
        ...state,
        success: action.payload.success,
      };
    default:
      return state;
  }
}

export const Creators = {
  getPlaylistRequest: () => ({ type: Types.GET_REQUEST }),
  updatePlaylist: ({ body, id }) => ({
    type: Types.UPDATE_PLAYLIST,
    payload: { body, id },
  }),
  deletePlaylist: (id) => ({
    type: Types.DELETE_PLAYLIST,
    payload: { id },
  }),
  deletePlaylistSuccess: (success) => ({
    type: Types.DELETE_PLAYLIST_SUCCESS,
    payload: { success },
  }),
  getPlaylistSuccess: (data) => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
  savePlaylist: (newPlaylist) => ({
    type: Types.SAVE_PLAYLIST,
    payload: newPlaylist,
  }),
};
