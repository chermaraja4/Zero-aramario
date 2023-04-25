import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.zeroarmario.com/',
  });

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
    token: null,
    userData: null,
    error: null,
    loading: false,
    message:"",
    isAdminActive:null
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      console.log("action", action)
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.userData = action.payload.userData;
      state.loading = false;
      state.error = null;
      state.message= action.payload.message
      state.isAdminActive= action.payload.isAdminActive
    //   alert(`${JSON.stringify(action.payload)}`);

    },
    loginFailure: (state, action) => {
      state.isLoggedIn = false;
      state.token = null;
      state.userData = null;
      state.loading = false;
      state.error = action.payload;
      alert(` ${JSON.stringify(action.payload)}`);

    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.userData = null;
      state.loading = false;
      state.error = null;
    }
  }
});


export const {loginStart,loginSuccess,loginFailure,logout} = loginSlice.actions;


export const login = (loginField) => async (dispatch) => {
  console.log(loginField,"///////////////////");
    dispatch(loginStart());
    try {
        let loginData = {
            "username" : loginField.userName,
            "password" : loginField.password
        }

      const response = await api.post('/api/admin/auth/login', loginData);
      // if (response.statusText !== "OK") {
      //   const error = await response.json();
      //   dispatch(loginFailure(error.messag))
      //   throw new Error(error.message);
      // } 
      console.log("responseresponseresponse",response);
        const token = response.data.access_token;
        localStorage.setItem('localtoken', token);
        dispatch(loginSuccess({
          isLoggedIn: true,
          token: token,
          userData: null,
          error: null,
          loading: false,
          message:"Login Sucessfully",
          isAdminActive:response.data.isAdminActive
        }));
        // window.location.href="/";
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
  

export default loginSlice.reducer;