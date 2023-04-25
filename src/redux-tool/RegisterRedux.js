import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
const api = axios.create({
    baseURL: 'https://api.zeroarmario.com/',
  });
const registerSlice = createSlice({
    name: 'register',
    initialState: {
      registerStatus: 'idle',
      user: null,
      error: null,
    },
    reducers: {
      createRegister: (state) => {
        state.registerStatus = 'loading';
      },
      registerSuccess: (state, action) => {
        state.registerStatus = 'succeeded';
        state.user = action.payload;
        state.error = null;
        alert(`User registered successfully: ${JSON.stringify(action.payload)}`);
      },
      registerFailed: (state, action) => {
        state.registerStatus = 'failed';
        state.error = action.payload;
        alert(`User registered failed: ${JSON.stringify(action.payload)}`);
      },
    },
  });

export const {createRegister, registerSuccess, registerFailed} = registerSlice.actions;


export const AdminRegister = (adminRegisterData) => {
    console.log("userData",adminRegisterData);
    return (dispatch) => {
      dispatch(createRegister());
  
      api.post('api/admin/auth/add-user', adminRegisterData)
        .then((response) => {
          dispatch(registerSuccess(response.data));
        })
        .catch((error) => {
          dispatch(registerFailed(error.message));
        });
    };
  };
  

  export const UserRegister = (userRegisterData) => {
    console.log("userData",userRegisterData);
    return (dispatch) => {
      dispatch(createRegister());
  
      api.post('/auth/register', userRegisterData)
        .then((response) => {
          dispatch(registerSuccess(response.data));
        })
        .catch((error) => {
          dispatch(registerFailed(error.message));
        });
    };
  };
export default registerSlice.reducer;