
import * as types from "../constants";
import mockData from "../mockdata.json";
export const fetchJsonData = () => {
  return dispatch => {
    const response = { data: {}, status: true };
    console.log('response', response);
    response.data.data = mockData;
    dispatch({
      type: types.JSON_DATA_FETCH_SUCCESS,
      response
    });
  };
};
