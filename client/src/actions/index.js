import axios from "axios";
import { AUTH_USER, AUTH_ERROR } from "./types";

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:5000/signup",
      formProps
    );
    //dispatch aut user payload response of token
    dispatch({ type: AUTH_USER, payload: response.data.token });
    //set token in localStorage for auth memory
    localStorage.setItem("token", response.data.token);
    //callback to SignUp function trigger re-direct
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Email is already in use." });
  }
};

export const signout = () => {
    //clear local storage token
    localStorage.removeItem('token');
    //return empty payload of auth user action
    return {
        type: AUTH_USER,
        payload: ''
    };
};
