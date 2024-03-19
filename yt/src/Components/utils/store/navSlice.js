import {createSlice } from "@reduxjs/toolkit";

const NavSlice = createSlice({
    name:"navigation",
    initialState:{
        isMenuOpen:true,
    },
    reducers: {
        toggleMenu: (state,action) => {
        state.isMenuOpen = !state.isMenuOpen;
    }, 
        CloseMenu: (state) => {
            state.isMenuOpen = false;
    }
}
})

export  const {toggleMenu,CloseMenu} = NavSlice.actions;
export default NavSlice.reducer;