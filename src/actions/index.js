
import * as types from "../constants";
import mockData from "../mockdata.json";
export const fetchCryptoCurrencies = () => {
  return dispatch => {
    const response = { data: {}, status: true };
    response.data.data = mockData;
    dispatch({
      type: types.CRYPTO_CURRENCY_FETCH_SUCCESS,
      response
    });
  };
};
