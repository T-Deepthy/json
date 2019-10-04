import axios from 'axios'
import config from './config'
import * as types from '../constants'
import moment from 'moment';
export const fetchCryptoCurrencies = () => {
    return (dispatch) => {
        dispatch({
            type: types.CRYPTO_CURRENCY_FETCH_REQUEST,
        })
        axios.get(`${config.SERVER_API_URL}start=1&limit=100&convert=USD`,
            { headers: { 'X-CMC_PRO_API_KEY': config.API_KEY }})
            .then(function (response) {
                const responseList = [];
                response.data.data.map((item , index) => {
                    item.key = index
                    item.last_updated = moment(item.last_updated).format("MMM Do YY"); 
                    responseList.push(item);
                });
                response.data.data = responseList;
                dispatch({
                    type: types.CRYPTO_CURRENCY_FETCH_SUCCESS,
                    response
                })
            })
            .catch(function (error) {
                dispatch({
                    type: types.CRYPTO_CURRENCY_FETCH_FAILED,
                    error
                })
            });
    };

}


