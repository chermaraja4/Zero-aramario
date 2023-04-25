import {createSlice} from '@reduxjs/toolkit';
import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.zeroarmario.com/',
  });

export const categorySlice = createSlice({
    name:"category",
    initialState:{
        data:[],
        CategoryAddedStatus:"",
        isLoading:false,
        error: null
    },
    reducers:{
        createcategory: (state, action) => {
            state.data = action.payload
        },
        getcategory: (state, action) => {
            state.data = action.payload
        },
        createcategorySuccess: (state, action) => {
            state.data = action.payload
            state.CategoryAddedStatus= action.payload.CategoryAddedStatus
            // state.isLoading = true;
            // alert(`catagory created successfully ${JSON.stringify(action.payload)}`);
          },
          createcategoryFail: (state, action) => {
            state.registerStatus = 'failed';
            state.error = action.payload;
            alert(`User registered failed: ${JSON.stringify(action.payload)}`);
          },
       
    },
    
});

export const {createcategory,createcategorySuccess,createcategoryFail,getcategory} = categorySlice.actions;




   
export const CreatedCategory = (CategoryList) => {
  console.log("CategoryList",CategoryList)
  return (dispatch) => {
    const data = { category: CategoryList };
    const token = localStorage.getItem("localtoken");

    dispatch(createcategory());
    api.post('/api/admin/category/create-category', data, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      } 
    })
      .then((response) => {
        dispatch(createcategorySuccess({ 
            data:response.data,
            CategoryAddedStatus:"Category Created Successfully",
            isLoading:true}));
      })
      .catch((error) => {
        dispatch(createcategoryFail(error.message));
      });
  };
};

// export const fetchCategories = createAsyncThunk(
//   'categories/fetchCategories',
//   async () => {
//     const response = await axios.get(
//       'http://3.141.96.45:8080/api/admin/category/get-categories'
//     );
//     return response.data;
//   }
// );

// export const fetchData = createAsyncThunk('data/fetchData',  () => {
//     console.log("aaaaaa");
//     return api.get('/api/admin/category/get-categories').then((response)=> response.data);
//     // console.log(response,"responseresponseresponseresponseresponse");
//     // const datass = await response.json();
//     // return datass;
//   });

// export const getCategoryss = () => {
//     console.log("+=================================");
//     return (dispatch) => {
//     //   const data = { category: CategoryList };
//     //   const token = localStorage.getItem("localtoken");
  
//       dispatch(getcategory());
//       api.get('/api/admin/category/get-categories')
//         .then((response) => {
//             console.log(response,"getcall");
//           dispatch(getcategory(response.data));
//         })
//         .catch((error) => {
//           console.log(error, "errorerrorerrorerrorerrorerrorerrorerrorerror");
//           dispatch(createcategoryFail(error.message));
//         });
//     };
//   };
export default categorySlice.reducer;