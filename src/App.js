import { Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import Home from "./pages/Home/Home";
import './App.scss'
import ProductList from "./pages/products/productList/ProductList";
import ProductDetail1 from "./pages/products/productDetails/ProductDetail1";
import WishList from "./pages/wishList/wishList";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/signup";
import TermsConditions from "./pages/TermsCondtions/TermsCondtions";
import ReturnPolicy from "./pages/HelpCenter/ReturnPolicy/ReturnPolicy";
import RefundForm from "./pages/HelpCenter/RefundForm/RefundForm";
import TrackMyOrder from "./pages/HelpCenter/TrackMyOrder/TrackMyOrder";
import FeedBack from "./pages/HelpCenter/FeedBack/FeedBack";
import FaqCustomers from "./pages/HelpCenter/FaqCustomers/FaqCusomers";
import AboutUs from "./pages/HelpCenter/AboutUs/AboutUs";
import AuthProvider from "./components/Provider/AuthProvider";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import Myorderslist from "./pages/Myaccountnew/Myorderslist/Myorderslist";
import Filladdress from "./pages/Myaccountnew/Filladdress/Filladdress";
import Checkout from "./pages/Myaccountnew/Checkout/Checkout";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import PersonalAccount from "./pages/Myaccountnew/PersonalAccount/PersonalAccount";
function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} /> */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-detail" element={<ProductDetail1 />} />
        <Route path="/wish-list" element={<WishList />} />
        <Route path="/sign-up" element={<SignUp />} />     
        <Route path="/account-information" element={<PersonalAccount/>} />
        {/* <Route path="/my-orders" element={<Myorders/>} /> */}
        <Route path="/terms-conditions" element={<TermsConditions/>} />
        <Route path="/return-policy" element={<ReturnPolicy />}/>
        <Route path="/refund-form" element={<RefundForm />}/>
        <Route path="/track-my-order" element={<TrackMyOrder />}/>
        <Route path="/feed-back" element={<FeedBack />}/>
        <Route path="/faq-customers" element={<FaqCustomers />}/>
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/myorders-list" element={<Myorderslist />}/>
        <Route path="/fill-address" element={<Filladdress />}/>
        <Route path="/Checkout" element={<Checkout />}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
             </Routes>
        </AuthProvider>

  );
}

export default App;

