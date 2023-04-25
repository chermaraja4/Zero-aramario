import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an asynchronous action creator that fetches data from the API
export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await fetch(
      'https://api.zeroarmario.com/api/admin/category/get-categories'
    );
    const data = await response.json();
    return data;
  }
);

// Define a slice to manage the state of the API data
const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { data: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
