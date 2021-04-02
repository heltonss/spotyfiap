export const Types = {
  GET_REQUEST: "playlists/GET_REQUEST",
  GET_REQUEST_ID: "playlists/GET_REQUEST_ID",
  GET_SUCCESS: "playlists/GET_SUCCESS",
  SAVE_PLAYLIST: "playlists/SAVE_PLAYLIST",
};

const INITIAL_STATE = {
  data: {
    id: 0,
    playlist: [],
  },
  loading: false,
  newPlaylist: {},
};

export default function Playlist(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
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
    default:
      return state;
  }
}

export const Creators = {
  getPlaylistRequest: () => ({ type: Types.GET_REQUEST }),
  getPlaylistDetailsRequest: (id) => ({
    type: Types.GET_REQUEST,
    payload: { id },
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
