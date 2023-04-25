import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './fonts/LineIcons.woff'
import './index.css'
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import registerReducer from './redux-tool/RegisterRedux';
import loginReducer from './redux-tool/LoginRedux';
import categoryReducer from './redux-tool/CategoryRedux';
import categoriesReducer from './redux-tool/CategoryGetredux'
import subCategoryReducer from './redux-tool/SubCategoryRedux';
import pTypeReducer from './redux-tool/PtypeRedux';
import productReducer from './redux-tool/ProductRedux';
import Addtocartredux from './redux-tool/Addtocartredux';
import { BrowserRouter } from "react-router-dom";

const store = configureStore({
  reducer:{
    register:registerReducer,
    login:loginReducer,
    category:categoryReducer,
    categories:categoriesReducer,
    subCategory:subCategoryReducer,
    pType:pTypeReducer,
    Product:productReducer,
    cartAdding:Addtocartredux
  }
});

ReactDOM.render(
  <React.StrictMode>
        <BrowserRouter>
        <Provider store={store}>
    <App />
    </Provider>
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


