import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import Products from './components/Products';
import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from './components/Cart';
import Ratings from './components/Ratings';
import Service from './components/Service';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
   <ToastContainer/>
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/products" element={<Products/>}/>
       <Route path="/ratings" element={<Ratings/>}/>
       <Route path="/service" element={<Service/>}/>
       <Route path="/cart" element={<Cart/>}/>

     </Routes> 
   </BrowserRouter>
   </Provider>
   
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
