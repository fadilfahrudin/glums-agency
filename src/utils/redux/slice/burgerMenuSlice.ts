import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    isBurgeMenu: false
}

export const burgerMenuSlice = createSlice({
    name: "burgerMenu",
    initialState,
    reducers: {
        setBurgerMenu: (state, action: PayloadAction<boolean>) => {
            state.isBurgeMenu = action.payload
        }
    }
})

export const { setBurgerMenu } = burgerMenuSlice.actions;
export default burgerMenuSlice.reducer