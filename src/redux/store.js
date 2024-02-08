import { configureStore } from "@reduxjs/toolkit";
import ratingsSlice from "./ratingsSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer:{
         
         rating:ratingsSlice,
         cart:cartSlice,
         
    }
}

);
export default store;  

