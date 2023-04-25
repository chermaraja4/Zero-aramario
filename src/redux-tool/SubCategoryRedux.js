import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const api = axios.create({
  baseURL: 'https://api.zeroarmario.com/',
});
const subCategorySlice = createSlice({
    name: 'SubCategories',
    initialState: {
      category: null,
      subCategory: '',
      status: 'idle',
      error: null
    },
    reducers: {
      createSubcategory: (state) => {
        state.registerStatus = 'loading';
      },
      cretedSuccess: (state, action) => {
        state.registerStatus = 'succeeded';
        state.user = action.payload;
        state.error = null;
        alert(`User registered successfully: ${JSON.stringify(action.payload)}`);
      },
      CreatedFailed: (state, action) => {
        state.registerStatus = 'failed';
        state.error = action.payload;
        alert(`User registered failed: ${JSON.stringify(action.payload)}`);
      },
    },
  });
  
export const {createSubcategory, cretedSuccess, CreatedFailed} = subCategorySlice.actions;

  
  export const createPost = createAsyncThunk(
    'SubCategories/createPost',
    async ({ category, subCategory }) => {
      const response = await axios.post('/api/post', { category, subCategory });
      return response.data;
    }
  );
  


  export const AdminRegister = (subcategoryDatas) => {
    console.log("userData",subcategoryDatas);
    return (dispatch) => {
      dispatch(createSubcategory());
  
      api.post('/api/admin/category/create-subCategory', subcategoryDatas)
        .then((response) => {
          dispatch(cretedSuccess(response.data));
        })
        .catch((error) => {
          dispatch(CreatedFailed(error.message));
        });
    };
  };
  


export default subCategorySlice.reducer;