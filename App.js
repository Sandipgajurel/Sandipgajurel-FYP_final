import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import SignUpForm from './Containers/Signup';
import Navbar from './Containers/Navbar';
import Footer from './Containers/Footer';
import LoginForm from './Containers/Login';
import HomePage from "./Containers/Homepage";
import Error from "./Containers/Error";
import Dashboard from "./Containers/Dashboard";
import ProductAdd from "./Containers/Products/ProductAdd";
import ProductView from "./Containers/Products/ViewProduct";
import EditProduct from "./Containers/Products/editProduct";
import LoginApp from "./Containers/loginapp";
import UserLogin from "./Containers/Userlogin/UserLogin";
import MainPage from "./Containers/mainpage";
import AppFoHomepage from "./Containers/Products/AppFoHomepage";
import EditUser from "./Containers/UserUpdate";
import ViewOrders from "./Containers/Orders/ViewOrders";
const App = () => {
  const [show, setShow] = useState(true);
  return (
   <> 
   <Routes>
   <Route  path='/login' element={< LoginApp />}></Route>
   <Route  path='/userlogin' element={< UserLogin />}></Route>
   <Route  path='/EditUser/:email' element={< EditUser />}></Route>
   <Route  path='/' element={<MainPage />}></Route>
    {/* <Route exact path='/homepage' element={<HomePage />}></Route> */}
    <Route  path='/homepage' element={<AppFoHomepage />}></Route>
     <Route  path='/signup' element={<SignUpForm />}></Route>
     <Route  path='/Dashboard' element={<Dashboard />}></Route>
     <Route  path='/ProductAdd' element={<ProductAdd />}></Route>
     <Route  path='/ProductView' element={<ProductView />}></Route>
     <Route  path='/orderview' element={<ViewOrders />}></Route>
     

     <Route  path='/editProduct/:productId' element={< EditProduct />}></Route>
      {/* <Route path='*' element={<Error />} /> */}
   </Routes>
   
   {/* <Navbar />
   <Footer /> */}
   </>
  );
}

export default App; 
 