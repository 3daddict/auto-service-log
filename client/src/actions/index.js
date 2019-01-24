import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

export const signup = formProps => async dispatch => {
    try{
    const response = await axios.post(
        'http://localhost:5000/signup', 
        formProps
        );

        dispatch({
            type: AUTH_USER,
            payload: response.data.token
        });
        console.log('TRY RESPONSE:', response);
    } catch(error) {
        dispatch({
            type: AUTH_ERROR,
            payload: 'Email is already in use'
        });
        // console.log('CATCH RESPONSE:', error);
    }
};