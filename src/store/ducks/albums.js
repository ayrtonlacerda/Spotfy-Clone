export const Types = {
  GET_REQUEST: 'albums/GET_REQUEST',
  GET_SUCSSES: 'albums/GET_SUCSSES',
  GET_FAILURE: 'albums/GET_FAILURE',
};

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function albums(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCSSES:
      return { data: action.payload.data, loading: false, error: null };
    case Types.GET_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export const Creators = {
  getAlbumRequest: () => ({
    type: Types.GET_REQUEST,
  }),

  getAlbumSuccess: data => ({
    type: Types.GET_SUCSSES,
    payload: { data },
  }),

  getAlbumFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error }
  }),
};
