import {configureStore} from "@reduxjs/toolkit";
import navSlice from "./navSlice";

const appStore = configureStore({
    reducer:{
         navigation :navSlice,
    } 
})

export default  appStore;