import {createSlice} from '@reduxjs/toolkit';
import axios from "axios";
const API_URL = "https://api.zeroarmario.com/api/admin/product/get-products";
export const ProductRedux = createSlice({
    name:"Product",
    initialState:{
        data:[]
    },
    reducers:{
        createproduct: (state, action) => {
            state.data = action.payload
        },
        getproduct: (state, action) => {
            state.data = action.payload
        }
    }
});


export const getproductlist = () => async (dispatch) =>{
try{
    console.log("false");
    const response = await axios.get(`${API_URL}`);
    console.log("response",response.data)
        dispatch(getproduct(response.data));
    }catch(err){
        throw new Error(err);
    }
};

export const CreatedProduct = (product)=>{

    console.log(product,"prrrrrrrrrrrrrrrr")
}

export const {createproduct,getproduct} = ProductRedux.actions;
export const productshowtodo = (state) => state.Product.data
export default ProductRedux.reducer;