import axios from 'axios';
import * as types from './clanActionTypes';

export function getDestinyClanProfileAction() {
    console.log('action')
    return async dispatch => {
        dispatch({ type: types.GET_CLAN_INFO_REQUEST });
        await axios({
            method: 'GET',
            url: `/GroupV2/3912618/`,
        }).then(function (response) {
            console.log(response,'response')
            dispatch({
                type: types.GET_CLAN_INFO_SUCCESS,
                result: response.data
            })
        }).catch(err => {
            console.log(err.response,"err")
            dispatch({
                type: types.GET_CLAN_INFO_FAILURE,
                error: "Failure to retrieve data!"
            })
        }
        )
    }
}