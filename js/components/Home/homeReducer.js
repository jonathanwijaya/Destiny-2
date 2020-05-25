import * as types from './homeActionTypes';

const initialState = {
  userProfile: null,
  loading: false,
  error: null,
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_DESTINY_USER_PROFILE_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null,
      });
      break;

    case types.GET_DESTINY_USER_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        userProfile: action.result,
        loading: false,
        error: null,
      });
      break;

    case types.GET_DESTINY_USER_PROFILE_FAILURE:
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
