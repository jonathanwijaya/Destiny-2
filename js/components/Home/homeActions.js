import axios from 'axios';
import * as types from './homeActionTypes';

export function getDestinyUserProfileAction(form) {
    console.log('action')
    return async dispatch => {
        dispatch({ type: types.GET_DESTINY_USER_PROFILE_REQUEST });
        await axios({
            method: 'GET',
            url: `/Destiny2/SearchDestinyPlayer/${form.memberShiptype}/${form.displayName}/`,
        }).then(function (response) {
            console.log(response,'response')
            dispatch({
                type: types.GET_DESTINY_USER_PROFILE_SUCCESS,
                result: response.data
            })
        }).catch(err => {
            console.log(err.response,"err")
            dispatch({
                type: types.GET_DESTINY_USER_PROFILE_FAILURE,
                error: "Failure to retrieve data!"
            })
        }
        )
    }
}