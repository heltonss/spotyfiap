export const Types = {
  GET_REQUEST: "songs/GET_REQUEST",
  GET_SUCCESS: "songs/GET_SUCCESS",
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function Songs(state = INITIAL_STATE, action) {
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
  getSongsRequest: () => ({ type: Types.GET_REQUEST }),
  getSongsSuccess: (data) => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
