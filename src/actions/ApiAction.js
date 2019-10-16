/* eslint-disable no-undef */
import axios from 'axios'
import config from './config'
import * as types from '../constants'


 const apiAction = () => {

    return dispatch => {
        dispatch({
            type: types.API_DATA_FETCH_REQUEST,
        })

        axios.get(config.SERVER_API_URL )
            .then(function (response) {
                
                let lines=response.data.split("\n");
                let result = [];

                let headers=lines[0].split(",");
                for(let i=1;i<lines.length;i++){

                    let obj = {};
                    let currentline=lines[i].split(",");

                    for(let j=0;j<headers.length;j++){
                        obj[headers[j]] = currentline[j];
                    }

                    result.push(obj);

                }
                response.data = result;
                dispatch({
                    type: types.API_DATA_FETCH_SUCCESS,
                    response
                })
            })
            
            .catch(function (error) { 
                dispatch({
                    type: types.API_DATA_FETCH_FAILED,
                    error
                })
            });
           
           
    };
    
   

}
export default apiAction;