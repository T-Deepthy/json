import * as types from '../constants'
const INITIAL_STATE = { data: [], error: null, loading: false, status: null }
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.API_DATA_FETCH_REQUEST:
            return {
                data: [],
                error: null,
                loading: true,
                status: null
            }
        case types.API_DATA_FETCH_SUCCESS:
            return {
                data: action.response.data,
                error: null,
                loading: false,
                status: action.response && action.response.status
            }
        case types.API_DATA_FETCH_FAILED:
            return {
                data: [],
                error: action.error,
                loading: false,
                status: null
            }
        default:
            return state;
    }

}
