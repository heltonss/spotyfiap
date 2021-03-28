export const Types = {
  GET_REQUEST: 'playlists/GET_REQUEST',
  GET_SUCCESS: 'playlists/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function Playlist(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  getPlaylistRequest: () => ({ type: Types.GET_REQUEST }),
  getPlaylistSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
