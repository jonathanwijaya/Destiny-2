import * as types from './clanActionTypes';

const initialState = {
  clanProfile: null,
  loading: false,
  error: null,
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_CLAN_INFO_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null,
      });
      break;

    case types.GET_CLAN_INFO_SUCCESS:
      return Object.assign({}, state, {
        clanProfile: action.result,
        loading: false,
        error: null,
      });
      break;

    case types.GET_CLAN_INFO_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });
      break;

    default:
      return state;
  }
}

export default homeReducer;
