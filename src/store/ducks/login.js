export const Types = {
  GET_REQUEST: "login/GET_REQUEST",
  GET_SUCCESS: "login/GET_SUCCESS",
};

const INITIAL_STATE = {
  loading: false,
};

export default function Songs(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: false };
    case Types.GET_SUCCESS:
      return { ...state, loading: true };
    default:
      return state;
  }
}

export const Creators = {
  loginRequest: () => ({ type: Types.GET_REQUEST }),
  loginSuccess: () => ({ type: Types.GET_SUCCESS }),
};
